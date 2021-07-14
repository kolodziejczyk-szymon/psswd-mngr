<template>
  <div class="account" v-for="account in accounts" v-bind:key="account">
      <h3>{{ account.name }}</h3>
      <p>{{ account.description }}</p>
      <span><i>{{ account.url }}</i></span>
  </div>
</template>

<script>

export default {
    name: 'Accounts',
    components: {
    },
    props: {
        accounts: Array,
    }
}
</script>

<style scoped lang="scss">
    .account {
        display: flex;
    }
</style>