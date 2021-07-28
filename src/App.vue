<template>
  <InfoModal v-if="isInfo"/>
  <router-view/>
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
