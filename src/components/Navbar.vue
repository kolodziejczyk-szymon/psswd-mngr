<template>
    <div class="navigation">
        <button class="navigation__link" @click="$emit('log-out')">Log out</button>
        <div class="navigation__link">Hello, {{ user.email }}</div>
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