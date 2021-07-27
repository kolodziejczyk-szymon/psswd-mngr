<template>
    <div class="modal__header">
        <h3 class="modal__title">Placeholder name</h3>
        <i @click="$emit('close-form')" class="modal__close fas fa-times-circle"></i>
    </div>

    <form class="account-form" @submit.prevent="createAccount" method="post">
    <input class="account-form__input" name="name" type="text" placeholder="Name" v-model="name">
    <input class="account-form__input" name="description" type="text" placeholder="Description" v-model="description">
    <input class="account-form__input" name="url" type="text" placeholder="Address" v-model="url">
    <input class="account-form__input" name="username" type="text" placeholder="Username" v-model="username">
    <input class="account-form__input" name="password" type="password" placeholder="Password" v-model="password">
    <button class="account-form__submit" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'AccountForm',
    emits: ['create-account', 'close-form'],
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

    .modal {
        &__header {
            margin: 0 30px 5px 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &__title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #655C5C;
        }

        &__close {
            color: #E05959;
            font-size: 2rem;
        }
    }

    .account-form {
        margin: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;

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
            width: 100%;
            color: white;
            border-radius: 15px;
            border: none;
            background-color: #E05959;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            font-weight: bold;
            padding: 14px 28px;
        }
    }
</style>