<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  margin: 0;
}


#app {
  margin-top: 30vh;
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
