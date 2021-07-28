<template>
  <div class="container">
      <form class="login-form" @submit.prevent="loginAndRedirect({email, password})" method="post">
        <h3 class="login-form__title">Log in</h3>
        <input class="login-form__input" name="email" type="text" placeholder="Email address" v-model="email">
        <input class="login-form__input" name="password" type="password" placeholder="Password" v-model="password">
        <span>Don't have an account yet? Register </span>
        <router-link class="register-link" to="/register">here.</router-link>
        <button class="login-form__submit" type="submit">Submit</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginForm',
    emits: ['logged-in'],
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions ([
            'logIn'
        ]),
        loginAndRedirect(payload) {
            this.logIn(payload)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="scss">

    .container {
        height: 100%;
        width: 100%;
        margin: auto;
        padding-top: 30vh;
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
            border-radius: 15px;
            background-color: #fff;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border: none;
            padding: 14px 28px;
        }

        &__submit {
            margin: 5px auto 0;
            width: 60%;
            color: white;
            border-radius: 15px;
            border: none;
            background-color: #E05959;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            font-weight: bold;
            padding: 14px 28px;
        }
    }

    .register-link {
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