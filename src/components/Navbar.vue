<template>
    <div class="navigation">
        <i class="navigation__link fas fa-home"></i>
        <i @click="$emit('add-new')" class="navigation__link fas fa-plus-circle"></i>
        <i @click="$emit('log-out')" class="navigation__link fas fa-sign-out-alt"></i>
    </div>
</template>

<script>
export default {
    emits: ['log-out'],
    props: {
        email: String
    },
}
</script>

<style scoped lang="scss">
    .navigation {
        overflow: hidden;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        padding: 20px 20px;

        &__link {
            flex-basis: 30%;
            background-color: transparent;
            border: none;
            font-size: 2.5rem;
            text-decoration: none;
            color: #E05959;
        }
    }
    
</style>