import { loginUser, registerUser } from '../services/authService'
import { createAccount, getUsersAccounts, deleteAccount } from '../services/accountService'

export default {
    async logIn ({ state }, payload) {
        let user = await loginUser(payload.email, payload.password)
        if (payload.email && payload.password){
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
    async deleteAccount({ state }, id) {
        await deleteAccount(id)
        if (id) {
            this.commit('deletionSuccess', { state , id })
        } else {
            this.commit('deletionFailure')
        }
    },
    logoutUser () {
        this.commit('logout')
    },
    // authenticateUser () {
    //     console.log()
    // }
  }
  