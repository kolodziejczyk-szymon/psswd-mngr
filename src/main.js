import { createApp } from 'vue'
import { createStore } from 'vuex'
import { loginUser, registerUser } from './services/authService'
import { createAccount, getUsersAccounts } from './services/accountService'
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
                this.commit('registerSuccess', { state, payload})
            } else {
                this.commit('registerFailure', { state })
            }
        },
        async addAccount({ state }, payload) {
            await createAccount(
                payload.name,
                payload.description,
                payload.url,
                payload.username,
                payload.password,
                state.user.email,
            )
            if (payload){
                this.commit('creationSuccess', { state , payload})
        } else {
                this.commit('creationFailure', { state })
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
        registerSuccess(state, payload) {
            state.status.loggedIn = true;
            state.user = payload;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        creationSuccess(state, {payload}) {
            state.accounts.push({
                name : payload.name,
                description : payload.description,
                url : payload.url,
                username : payload.username,
                password: payload.password,
                email: state.user.email,
            })
        },
        creationFailure() {
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
