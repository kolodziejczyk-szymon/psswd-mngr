<template>
  <div class="container">
      <form @submit="loginUser" action="post">
          <div class="form-control">
              <label for="email"></label>
              <input name="email" type="text" v-model="name">
          </div>
          <div class="form-control">
              <label for="password"></label>
              <input name="password" type="password" v-model="password">
          </div>
          <button type="submit">Login</button>
      </form>

  </div>
</template>

<script>

import axios from "axios";

export default {
    data () {
        return {
            email: '',
            password: '',
            loading: true,
        }
    },
    methods: {
        loginUser() {
            axios
                .post('127.0.0.1:8000/login', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log(response.data);
                }).catch(e => {
                    console.log(e);
                }).finally(() => {
                    this.isLoading = false;
                });
        }
    }
}
</script>

<style>

</style>