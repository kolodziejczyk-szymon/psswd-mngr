<template>
  <div class="container">
      <form class="register-form" @submit.prevent="register" method="post">
        <h3 class="register-form__title">Register</h3>
        <input class="register-form__input" name="email" type="text" placeholder="Email address" v-model="email">
        <input class="register-form__input" name="password" type="password" placeholder="Password" v-model="password">
        <input class="register-form__input" name="password" type="password" placeholder="Confirm password" v-model="confirmPassword">
        <span>Already have an account? Log in </span>
        <router-link class="login-link" to="/login">here.</router-link>
        <button class="register-form__submit" type="submit">Submit</button>
      </form>
  </div>
</template>

<script>

import { registerUser } from "../services/authService";

export default {
    name: 'RegisterForm',
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        register() {
            registerUser(this.email, this.password);
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

    .register-form {
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

    .login-link {
        font-weight: bold;
        text-decoration: none;
        color: #eb4634;
    }

    @media (min-width:600px)  {
        .container {
            width: 70%;
        }
    }
    @media (min-width:801px)  {
        .container {
            width: 60%;
        }
    }
    @media (min-width:1025px) {
        .container {
            width: 50%;
        }
    }
</style>