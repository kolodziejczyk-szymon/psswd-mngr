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
          modal : {
              isVisible: true,
              type: '',
              text: 'placeholder'
          }
        }
      },
    actions,
    mutations,
})

export default store