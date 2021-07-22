import { createApp } from 'vue'
import { createStore } from 'vuex'
import { loginUser, registerUser } from './services/authService'
import { createAccount } from './services/accountService'
import router from './router'
import App from './App.vue'


const store = createStore({
    state () {
      return {
        user: null,
        status: {
            loggedIn: false,
        }
      }
    },
    actions: {
        async logIn ({ state }, payload) {
            let user = await loginUser(payload.login, payload.password)
            if (payload){
                this.commit('loginSuccess', { state, payload: user})
            } else {
                this.commit('loginFailure', { state })
            }
        },
        async register({ state }, payload) {
            await registerUser(payload.login, payload.password)
            if (payload){
                this.commit('registerSuccess', { state, payload: payload})
            } else {
                this.commit('registerFailure', { state })
            }
        },
        async addAccount({ state }, payload) {
            let account = await createAccount(
                payload[0],
                payload[1],
                payload[2]
            )
            console.log(account)
            if (payload){
                this.commit('creationSuccess', { state, payload: payload})
            } else {
                this.commit('creationFailure', { state })
            }
        },
        logoutUser () {
            this.commit('logout')
        }
    },
    mutations: {
        loginSuccess(state, payload) {
            state.status.loggedIn = true;
            state.user = payload.user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state, payload) {
            state.status.loggedIn = true;
            state.user = payload.user;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        accSuccess() {
            console.log('Success.')
        },
        accFailure() {
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
