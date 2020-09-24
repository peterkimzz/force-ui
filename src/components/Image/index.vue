<template>
  <img :src="src" :alt="alt" class="f-img" />
</template>

<script>
export default {
  name: 'FImage',
  props: {
    src: {
      type: String,
      default: null,
      required: true
    },
    alt: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-img {
}
</style>
