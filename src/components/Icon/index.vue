<template>
  <component :is="GetIcon" class="icon" />
</template>

<script>
export default {
  name: 'FIcon',
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    GetIcon() {
      try {
        return () => import(`./${this.icon}.vue`)
      } catch (err) {
        return ''
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  @apply w-5 h-5;
}
</style>