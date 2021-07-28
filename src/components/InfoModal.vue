<template>
  <div class="info">
      <div class="info__content">
        {{ text + type }}
      </div>
  </div>
</template>

<script>
export default {
    name: "InfoModal",
    computed: {
        type() {
            return this.$store.state.modal.type
        },
        text() {
            return this.$store.state.modal.text
        }
    }
}
</script>

<style scoped lang="scss">
    .info {
        position: absolute;
        width: 100%;
        bottom:0px;
        text-align: center;
        overflow: hidden;
        transition: .2s;
        color: #fff;
        background-color: rgba(224, 89, 89);
        &__content {
            padding: 14px 28px;
        }
    }
</style>