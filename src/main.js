import { createApp } from 'vue'
import { createStore } from 'vuex'
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
        logIn ({ state }, payload) {

            

            if (payload){
                state.status.loggedIn = true;
                state.user = payload;
                console.log('success')
            } else {
                state.status.loggedIn = false;
                state.user = null;
                console.log('failure')
            }
        },
        register (state) {
            if(state)
                this.commit('registerSuccess')
            else
                this.commit('registerFailure')
        },
        logout () {
            this.commit('logout')
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
            console.log('success')
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
            console.log('failure')
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
})

const app = createApp(App);


app.use(router);
app.use(store);
app.mount('#app');