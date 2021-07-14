<template>
  <div class="container">
      <form class="login-form" @submit="loginUser" action="post">
        <h3 class="login-form__title">Log in</h3>
        <input class="login-form__input" name="email" type="text" placeholder="Email address" v-model="name">
        <input class="login-form__input" name="password" type="password" placeholder="Password" v-model="password">
        <span>Don't have an account yet? Register </span>
        <router-link class="register-link" to="/register">here.</router-link>
        <button class="login-form__submit" type="submit">Submit</button>
      </form>


  </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'LoginForm',
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
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                }
                
                )
                .then(response => {
                    console.log(response.data);
                }).catch(error => {
                    if(error.response) {
                        this.error = error.response;
                    } else {
                        this.error = 'Unknown.'
                    }
                    console.log(error);
                }).finally(() => {
                    this.isLoading = false;
                });
        }
    }
}
</script>

<style scoped lang="scss">

    .container {
        height: 100%;
        width: 100%;
        margin: auto;
    }

    .login-form {
        margin: auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;

        &__title {
            margin: 0 auto;
            font-size: 1.5rem;
            font-weight: bold;
        }

        &__input {
            margin: 5px;
            border-radius: 5px;
            border: 1px solid #eb4634; 
            padding: 10px;
        }

        &__submit {
            margin: 5px auto;
            width: 50%; 
            color: white;
            border-radius: 5px;
            border: 1px solid #eb4634;
            background-color: #eb4634;
            font-weight: bold;
            padding: 10px 25px;
        }
    }

    .register-link {
        font-weight: bold;
        text-decoration: none;
        color: #eb4634;
    }

</style>