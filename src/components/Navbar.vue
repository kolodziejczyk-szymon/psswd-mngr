<template>
    <div class="navigation">
        <div class="navigation__link">Hello, {{ email }}</div>
        <button class="navigation__link" @click="$emit('add-new')">Add</button>
        <button class="navigation__link" @click="$emit('log-out')">Log out</button>
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
        justify-content: space-around;
        background-color: #eb4634;
        padding: 10px 20px;

        &__link {
            flex-basis: 30%;
            background-color: transparent;
            border: none;
            font-size: .75rem;
            text-decoration: none;
            color: white
        }
    }
    
</style>