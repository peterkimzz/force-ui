<template>
  <div class="divider" />
</template>

<script>
export default {
  name: 'FDivider'
}
</script>

<style lang="postcss" scoped>
.divider {
  @apply h-px;
  @apply my-4;
  @apply bg-gray-200;

  @screen md {
    @apply my-6;
  }
}
</style>