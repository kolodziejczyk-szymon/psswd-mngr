<template>
    <div class="account-content">
        <div class="account-text">
            <span class="account-text__title">{{ account.name }}</span>
            <p class="account-text__desc">{{ account.description }}</p>
        </div>
        <button class="account-content__show" @click="toggleModal">Show</button>
    </div>
    <div v-if="showModal" class="modal">
        <div class="modal__mask" @click="toggleModal">
            <div class="modal__content">
                <ul class="labels">
                    <li class="labels__el">url.</li>
                    <li class="labels__el">username.</li>
                    <li class="labels__el">password.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountTile",
    data () {
        return {
            showModal: false,
        }
    },
    props: {
        account: Object
    }, 
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
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
        border: 1px solid #eb4634;
        border-radius: 5px;
        padding: 5px 10px;

        &__show {
            margin: auto;
            flex-basis: 25%;
            background-color: #eb4634;
            color: white;
            border-radius: 5px;
            border: none;
            padding: 5px;
        }
    }

    .account-text {
        flex-basis: 75%;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 5px 0;
        &__title {
            font-weight: bold;
        }
        &__desc {
            font-size: .75rem
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
            margin: 15% auto;
            width: 80%; 
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
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
            margin: 5px auto;
            width: 90%;
            border: 1px solid #eb4634;
            border-radius: 5px;
            padding: 10px;
        }
    }
</style>