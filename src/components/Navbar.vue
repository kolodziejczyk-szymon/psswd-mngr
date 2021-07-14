<template>
    <div class="navigation">
        <router-link class="navigation__link" to="/">Logout</router-link>
        <router-link class="navigation__link" to="/dashboard">Dashboard</router-link>
    </div>
</template>

<script>
export default {

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
            text-decoration: none;
            color: white
        }
    }
    
</style>