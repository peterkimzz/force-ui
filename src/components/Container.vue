<template>
  <div class="f-container">
    <div class="f-inner-container bg-cool-gray-700">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FContainer',
}
</script>

<style lang="postcss" scoped>
.f-container {
  @apply mx-auto;
}
.f-inner-container {
  @apply px-4;
}
</style>
