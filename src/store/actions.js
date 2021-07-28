import { loginUser, registerUser } from '../services/authService'
import { createAccount, getUsersAccounts, deleteAccount } from '../services/accountService'

export default {
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
        let res = await registerUser(payload.login, payload.password)
        console.log(res)
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
  }
  