import { createApp } from 'vue'
import { createStore } from 'vuex'
import { loginUser, registerUser } from './services/authService'
import { createAccount, getUsersAccounts, deleteAccount } from './services/accountService'
import router from './router'
import App from './App.vue'


const store = createStore({
    state () {
      return {
        user: null,
        status: {
            loggedIn: false,
        },
        accounts: [],
      }
    },
    actions: {
        async logIn ({ state }, payload) {
            let user = await loginUser(payload.login, payload.password)
            if (payload){
                let accounts = await getUsersAccounts(user.email)
                this.commit('loginSuccess', { state, user, accounts})
            } else {
                this.commit('loginFailure', { state })
            }
        },
        async register({ state }, payload) {
            await registerUser(payload.login, payload.password)
            if (payload){
                this.commit('registerSuccess', { state })
            } else {
                this.commit('registerFailure', { state })
            }
        },
        async addAccount({ state }, payload) {
            if (payload){
                let newAccount = await createAccount(
                    payload.name,
                    payload.description,
                    payload.url,
                    payload.username,
                    payload.password,
                    state.user.email,
                    state.user.auth
                )
                this.commit('creationSuccess', { state, newAccount } )
            } else {
                this.commit('creationFailure', { state })
            }
        },
        async deleteAccount({ state }, payload) {
            await deleteAccount(payload.id)
            if (payload) {
                this.commit('deletionSuccess', { state , payload })
            } else {
                this.commit('deletionFailure')
            }
        },
        logoutUser () {
            this.commit('logout')
        },
    },
    mutations: {
        loginSuccess(state, payload) {
            state.status.loggedIn = true;
            state.user = payload.user;
            state.accounts = payload.accounts;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        creationSuccess(state, payload) {
            state.accounts.push(payload.newAccount.data)
        },
        creationFailure() {
            console.log('Failure.')
        },
        deletionSuccess(state, {payload}) {
            console.log('Success.')
            state.accounts = state.accounts.filter(item => item.id !== payload.id);
        },
        deletionFailure() {
            console.log('Failure.')
        },
        logout() {
            this.state.status.loggedIn = false;
            this.state.user = null;
        },
    }
})

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
