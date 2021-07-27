<template>
  <div class="register">
    <RegisterForm ></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style scoped lang="scss">
  .register {
    margin-top: 30vh;
  }
</style>