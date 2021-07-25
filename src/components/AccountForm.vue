<template>
    <div class="container">
      <form class="login-form" @submit.prevent="createAccount" method="post">
        <div class="form__header">
            <span class="form__title">
            {{ emitName }}
            </span>
            <button class="form__close" @click="$emit('close-modal')">x</button>
        </div>

        <h3 class="login-form__title">add an account</h3>
        <input class="login-form__input" name="name" type="text" placeholder="Name" v-model="name">
        <input class="login-form__input" name="description" type="text" placeholder="description" v-model="description">
        <input class="login-form__input" name="url" type="text" placeholder="Url address" v-model="url">
        <input class="login-form__input" name="username" type="text" placeholder="username" v-model="username">
        <input class="login-form__input" name="password" type="password" placeholder="Password" v-model="password">
        <button class="login-form__submit" type="submit">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'AccountForm',
    emits: ['create-account'],
    props: {
        emitName: String
    },
    data () {
        return {
            name: '',
            description: '',
            url: '',
            username: '',
            password: '',
        }
    },
    methods: {
        createAccount() {
            this.$emit('create-account', [
                this.name, this.description, this.url, this.username, this.password
            ])
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