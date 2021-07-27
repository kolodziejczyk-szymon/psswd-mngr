<template>
    <div class="account-content">
        <div @click="toggleDisplay" class="account-text">
            <span class="account-text__date">date-add</span>
            <span class="account-text__title">{{ account.name }}</span>
        </div>
        <i @click="toggleEdit" class="account-content__btn fas fa-pen"></i>
        <i @click="deleteAccount(account.id)" class="account-content__btn fas fa-trash-alt"></i>
    </div>
    <div v-if="showModal" class="modal">
        <div class="modal__mask">
            <div class="modal__content">
                <div v-if="info" class="display-content">
                    <div class="modal__header">
                        <span class="modal__title">
                            {{ account.name }}
                        </span>
                        <i @click="toggleModal" class="modal__close fas fa-times-circle"></i>
                    </div>
                    <ul class="labels">
                        <li class="labels__el">{{ account.description }}</li>
                        <li class="labels__el">{{ account.url }}</li>
                        <li class="labels__el">{{ account.username }}</li>
                        <li class="labels__el">{{ account.password }}</li>
                    </ul>
                </div>
                <div v-if="edit" class="display-edition">
                    <AccountForm @close-form="toggleModal" :emitName="'edit-account'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountForm from '../components/AccountForm.vue';
import { enc } from 'crypto-js'
import Aes from 'crypto-js/aes'

export default {
    name: "AccountTile",
    data () {
        return {
            showModal: false,
            edit: false,
            info: false
        }
    },
    props: {
        account: Object
    },
    components: {
        AccountForm,
    }, 
    computed: {
        auth() {
            return this.$store.state.user.auth
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
        toggleEdit() {
            this.toggleModal()
            if (this.edit == false) {
                this.edit = true
                this.info = false
            }
        },
        toggleDisplay() {
            this.toggleModal()
            if (this.info == false) {
                this.info = true
                this.edit = false
            }
        },
        async deleteAccount(id) {
            await this.$store.dispatch('deleteAccount', {id})
    },
        decrypt(message) {
            return Aes.decrypt(message, this.auth).toString(enc.Utf8);
        }
    }
}
</script>

<style scoped lang="scss">
    .account-content {
        margin: 5px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border-radius: 15px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        background-color: #fff;
        padding: 15px 25px;

        &__btn {
            margin: auto;
            flex-basis: 10%;
            font-size: 1.5rem;
            color: #E05959;
            padding: 10px;
        }
    }

    .account-text {
        flex-basis: 80%;
        display: flex;
        flex-direction: column;
        color: #655C5C;
        text-align: left;
        padding: 5px 0;
        &__date {
            font-size: .75rem;
        }
        &__title {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .modal {
        &__mask {
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0, 0, 0, 0.5);
            transition: opacity 0.5s ease;
        }
        &__content {            
            display: flex;
            flex-direction: column;
            margin: 15% auto;
            width: 80%; 
            background-color: #fff;
            border-radius: 15px;
            padding: 20px;
        }

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

    .labels {
        margin: 0;
        width: 100%;
        list-style-type: none;
        text-align: center;
        text-transform: uppercase;
        padding: 0;
        &__el {
            margin: 10px auto;
            width: 80%;
            border-radius: 15px;
            background-color: #fff;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            padding: 10px;
        }
    }
</style>