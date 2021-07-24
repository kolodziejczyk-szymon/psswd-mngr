<template>
  <div class="user">
    <span class="user__name">Hello, {{ user.email }}</span>
  </div>
  <Navbar @log-out="$emit('log-out')"></Navbar>
  <Accounts :accounts="accounts"></Accounts>
  <AccountForm @create-account="createAccount"/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Accounts from '../components/Accounts.vue';
import AccountForm from '../components/AccountForm.vue';


export default {
  name: 'Dashboard',
  emits: ['log-out', 'create-account'],
  components: {
    Navbar,
    Accounts,
    AccountForm,
  }, 
  data () {
    return {
      user: {},
    }
  },
  methods: {
    createAccount(payload) {
      this.$emit('create-account', payload)
    },
  },
  created () {
    this.user ? this.$store.state.user : null
  }
}

</script>

<style scoped lang="scss">
  .user {
    &__name {
      color:black;
      font-size:2rem;
    }
  }
</style>