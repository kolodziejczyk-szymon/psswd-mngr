import { loginUser, registerUser } from '../services/authService'
import { createAccount, getUsersAccounts, deleteAccount } from '../services/accountService'

export default {
    async logIn ({ state }, payload) {
        let user = await loginUser(payload.email, payload.password).catch(err => {
            this.commit('createNotification', { state, err })
        })
        if (payload.email && payload.password && user){
            let accounts = await getUsersAccounts(user.email)
            this.commit('loginSuccess', { state, user, accounts })
        } else {
            this.commit('loginFailure', { state })
        }
    },
    logoutUser () {
        this.commit('logout')
    },
    async register({ state }, payload) {
        let res = await registerUser(payload.email, payload.password)
        if (res.data.status === "OK"){
            let text = "Konto zostało utworzone."
            this.commit('registerSuccess', { state })
            this.commit('createNotification', { state, text })
        } else {
            let text = res.data.message
            this.commit('registerFailure', { state })
            this.commit('createNotification', { state, text })
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
            this.commit('deletionSuccess', { state, id })
        } else {
            this.commit('deletionFailure')
        }
    },
    async createNotification({ state }, payload) {
        this.commit('createNotification', { state }, payload)
    },
    async deleteNotification({ state }, error) {
        this.commit('deleteNotification', { state, error })
    }
  }
  