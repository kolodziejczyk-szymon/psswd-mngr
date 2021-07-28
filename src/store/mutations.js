export const mutations = {
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
    deletionSuccess(state, {id}) {
        console.log('Account deleted successfully.')
        console.log(id)
        state.accounts = state.accounts.filter(item => item.id !== id);
    },
    deletionFailure() {
        console.log('An error occured while deleting the account.')
    },
    logout() {
        this.state.status.loggedIn = false;
        this.state.user = null;
    },
  }
  