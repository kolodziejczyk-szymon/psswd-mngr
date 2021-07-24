<template>
  <div class="account-list">
    <div class="account" v-for="account in accounts" v-bind:key="account">
      <AccountTile :account="account"/>
    </div>
  </div>
</template>

<script>
import AccountTile from '../components/AccountTile.vue';

export default {

  name: 'Accounts',
  components: {
    AccountTile
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    }
  }
}
</script>

<style scoped lang="scss">
  .account-list {
    display: grid;
  }

  @media (min-width:600px)  {
    .account-list {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width:801px)  {
    .account-list {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width:1025px) {
    .account-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>