<template>
  Logowanie
  <LoginForm></LoginForm>
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
