import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import App from './App.vue'

const store = createStore({
    state () {
      return {
        isAuth: false,
      }
    },
    mutations: {
      increment (state) {
        console.log(state.isAuth)
      }
    }
})

const app = createApp(App);


app.use(router);
app.use(store);
app.mount('#app');