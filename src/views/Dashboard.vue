<template>
  <div class="dashboard">
    <p class="dashboard__name">Hello, {{ user.email }}</p>
    <Navbar :email="user.email" @log-out="logoutAndRedirect" @add-new="toggleForm"></Navbar>
    <Accounts></Accounts>
    <div v-if="showForm" class="modal">
      <div class="modal__mask" >
        <div class="modal__content">
          <AccountForm :emitName="'create-account'" @close-form="toggleForm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Navbar from '../components/Navbar.vue';
import Accounts from '../components/Accounts.vue';
import AccountForm from '../components/AccountForm.vue';


export default {
  name: 'Dashboard',
  data() {
    return {
      showForm: false,
    }
  },
  emits: ['log-out', 'create-account'],
  components: {
    Navbar,
    Accounts,
    AccountForm,
  },
  computed: {
    ...mapState([
      'user'
    ]),
  },
  methods: {
    ...mapActions([
      'logoutUser'
    ]),
    logoutAndRedirect() {
      this.logoutUser()
      this.$router.push('/login')
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}

</script>

<style scoped lang="scss">

  .dashboard {
    min-height: 100vh;
    &__name {
      margin: 0 10px;
      text-align: left;
      font-size: 1.5rem;
      color: #655C5C;
      padding: 3vh 5vw;
    }
  }

  .modal {
    &__mask {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.5s ease;
    }
    &__content {
        margin: 15% auto;
        display: flex;
        flex-direction: column;
        width: 80%; 
        background-color: #fff;
        border-radius: 15px;
        padding: 3vh 0;
    }
  }
</style>