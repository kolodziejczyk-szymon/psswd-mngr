<template>
  <Navbar :email="user.email" @log-out="$emit('log-out')" @add-new="toggleForm"></Navbar>
  <Accounts></Accounts>
  <div v-if="showForm" class="modal">
    <div class="modal__mask" >
      <div class="modal__content">
        <button @click="toggleForm">awdawdawdawd</button>
        <AccountForm :emitName="'create-account'" @create-account="createAccount"/>
      </div>
    </div>
  </div>
</template>

<script>

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
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    createAccount(payload) {
      this.$emit('create-account', payload)
      this.toggleForm()
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}

</script>

<style scoped lang="scss">
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
        display: flex;
        margin: 15% auto;
        width: 80%; 
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
    }
  }
</style>