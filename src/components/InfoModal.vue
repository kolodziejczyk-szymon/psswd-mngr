<template>
  <div @click="closeModal()" class="info">
      <div class="error">
          <p class="content">
            {{ error }}
          </p>
      </div>
  </div>
</template>

<script>


export default {
    
    name: "InfoModal",
    emits: (
        ['close-modal']
    ),
    props: {
        error: String,
    },
    methods: {
        closeModal() {
            this.$emit('close-modal', this.error)
        }
    }
}
</script>

<style scoped lang="scss">
    .info {
        margin: 10px auto;
        position: fixed;
        left: 28%;
        bottom: 10vh;
        width: 40%;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 10px;
        &__content {
            margin: auto;
        }
    }
</style>