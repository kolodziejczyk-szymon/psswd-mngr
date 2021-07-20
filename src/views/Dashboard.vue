<template>
  <Navbar @log-out="$emit('log-out')"></Navbar>
  <Accounts :accounts="accounts"></Accounts>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Accounts from '../components/Accounts.vue';

export default {
  name: 'Dashboard',
  emits: ['log-out'],
  components: {
    Navbar,
    Accounts,
  }, 
  data () {
    return {
      accounts: [{
        name: 'Facebook',
        description: '',
        login: 'szymon',
        password: '123',
        email: 'szymon@szymon.pl',
        url: 'facebook.com',
      },
      {
        name: 'Twitter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        login: 'szymon',
        password: '123',
        email: 'szymon@szymon.pl',
        url: 'twitter.com',
      },
      {
        name: 'Instagram',
        description: 'Lorem ipsum dolor sit amet, consectet',
        login: 'szymon',
        password: '123',
        email: 'szymon@szymon.pl',
        url: 'instagram.com',
      }]
    }
  }
}
</script>

<style>

</style>