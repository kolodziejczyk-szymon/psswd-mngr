<template>
    <div class="errors" v-if="errors">
      <InfoModal @close-modal="deleteNotification" :error="error" v-for="error in errors" v-bind:key="error"/>
    </div>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
import InfoModal from './components/InfoModal'

export default {
  name: 'App',
  components: {
    InfoModal,
  },
  computed: {
    errors() {
      return this.$store.state.errors
    }
  }, 
  methods: {
    ...mapActions([
      'createNotification', 'deleteNotification',
    ]),
  }   
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
