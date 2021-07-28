<template>
  <div class="register">
    <RegisterForm @registered="register" ></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  methods: {
    register(payload) {
      this.$emit('registered', payload)
    }
  }
}
</script>

<style scoped lang="scss">

</style>