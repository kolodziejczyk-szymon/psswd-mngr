<template>
    <div class="navigation">
        <div class="navigation__link">Hello, {{ user.email }}</div>
        <button class="navigation__link" @click="$emit('add-new')">Add new</button>
        <button class="navigation__link" @click="$emit('log-out')">Log out</button>
    </div>
</template>

<script>
export default {
    emits: ['log-out'],
    computed: {
        user() {
        return this.$store.state.user
        }
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
            background-color: transparent;
            border: none;
            font-size: .75rem;
            text-decoration: none;
            color: white
        }
    }
    
</style>