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
  @apply bg-gray-200;

  @apply my-4;

  @screen md {
    @apply my-5;
  }
}
</style>