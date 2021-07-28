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
    deletionSuccess(state, {payload}) {
        console.log('Success.')
        state.accounts = state.accounts.filter(item => item.id !== payload.id);
    },
    deletionFailure() {
        console.log('Failure.')
    },
    logout() {
        this.state.status.loggedIn = false;
        this.state.user = null;
    },
  }
  