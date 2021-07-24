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
                <span>{{ account.name }} </span>
                <span>{{ account.url }}</span>
                nananan
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
        margin: 0 10px;
        display: flex;
        justify-content: space-evenly;

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
</style>