import { createStore } from 'vuex';
import { mutations } from './mutations'
import actions from './actions'

const store = createStore({
    state () {
        return {
          user: null,
          status: {
              loggedIn: false,
          },
          accounts: [],
          errors: [],
        }
      },
    actions,
    mutations,
})

export default store