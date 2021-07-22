<template>
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
      accounts: [{
        name: 'Instagram',
        description: 'Lorem ipsum dolor sit amet, consectet',
        login: 'szymon',
        password: '123',
        email: 'szymon@szymon.pl',
        url: 'instagram.com',
      }],
    }
  },
  methods: {
    createAccount(payload) {
      this.$emit('create-account', payload)
    }
  }
}

</script>

<style>

</style>