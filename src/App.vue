<template>
  <router-view 
  @logged-in="loginUser"
  @log-out="logoutUser"
  @create-account="createAccount"
  @registered="registerUser"/>
  <!-- <button @click="decrypt(this.password)">ddd</button> -->
</template>

<script>
// import Aes from 'crypto-js/aes'
// import { enc } from 'crypto-js'

export default {
  name: 'App',
  // nie jestem pewien, czy emits powinno się w tym miejscu znajdować
  emits: ['log-out', 'logged-in', 'create-account'],
  watch: {
    $route () {
      this.authenticateUser()
    }
  },
  methods: {
    async loginUser(auth) {
      await this.$store.dispatch('logIn', {
        login: auth[0], 
        password: auth[1]
      })
      this.authenticateUser()
    },
    async registerUser(payload) {
      await this.$store.dispatch('register', {
        login: payload[0],
        password: payload[1],
      })
    },
    async createAccount(payload) {
      await this.$store.dispatch('addAccount', {
        name: payload[0],
        description: payload[1],
        url: payload[2],
        username: payload[3],
        password: payload[4]
      })
    },
    authenticateUser() {
      if (this.$store.state.status.loggedIn) {
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
    },
    logoutUser() {
      this.$store.dispatch('logoutUser');
      this.authenticateUser()
    }
    // decrypt(password) {
    //   return Aes.decrypt(this.auth, password).toString(enc.Utf8);
    // }
  }, 
  created() {
  },
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  margin: 0;
}


#app {
  margin: 5vh 0 30vh 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eb4634;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
