<template>
  <div class="account" v-for="account in accounts" v-bind:key="account">
      <h4>{{ account.name }}</h4>
      <p>{{ account.description }}</p>
      <span><i>{{ account.url }}</i></span>
  </div>
</template>

<script>

export default {
    name: 'Accounts',
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
    accounts () {
      return this.$store.state.accounts
    }
  },
  mounted () {
    console.log(this.accounts)
    
  }
}
</script>

<style scoped lang="scss">
    .account {
        display: flex;
    }
</style>