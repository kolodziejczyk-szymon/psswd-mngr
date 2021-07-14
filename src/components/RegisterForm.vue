<template>
  <div class="container">
      <form class="register-form" action="post">
        <h3 class="register-form__title">Register</h3>
        <input class="register-form__input" name="email" type="text" placeholder="Email address" v-model="name">
        <input class="register-form__input" name="password" type="password" placeholder="Password" v-model="password">
        <input class="register-form__input" name="password" type="password" placeholder="Confirm password" v-model="confirmPassword">
        <span>Already have an account? Log in </span>
        <router-link class="login-link" to="/login">here.</router-link>
        <button class="register-form__submit" type="submit">Submit</button>
      </form>
  </div>
</template>

<script>

// import axios from "axios";

export default {
    name: 'RegisterForm',
    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
        }
    },
    methods: {
        // Tu będzie register user.
    //     registerUser() {
    //         axios
    //             .post('127.0.0.1:8000/register', {
    //                 email: this.email,
    //                 password: this.password
    //             }, {
    //                 headers: {
    //                     'content-type': 'application/x-www-form-urlencoded'
    //                 }
    //             }
                
    //             )
    //             .then(response => {
    //                 console.log(response.data);
    //             }).catch(error => {
    //                 if(error.response) {
    //                     this.error = error.response;
    //                 } else {
    //                     this.error = 'Unknown.'
    //                 }
    //                 console.log(error);
    //             }).finally(() => {
    //                 this.isLoading = false;
    //             });
    //     }
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

</style>