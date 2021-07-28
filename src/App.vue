<template>
  <InfoModal v-if="isInfo"/>
  <router-view
  @logged-in="loginUser"
  @log-out="logoutUser"
  @create-account="createAccount"
  @registered="registerUser"/>
</template>

<script>
import InfoModal from './components/InfoModal'

export default {
  name: 'App',
  components: {
    InfoModal,
  },
  computed: {
    isInfo() {
      return this.$store.state.modal.isVisible
    }
  },
  watch: {
    $route () {
      if(this.$route.path == '/') {
        this.authenticateUser()
      }
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
      }).then(this.$router.push('login'))
      
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
  }, 
  created() {
    this.authenticateUser()
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  margin: 0;
}

#app {
  min-height: 100vh;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F8F8F8;
  text-align: center;
  color: #E05959;
}
</style>
