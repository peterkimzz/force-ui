<template>
  <li class="slide-item">
    <a href="/" class="slide-item--link-container">
      <f-icon icon="User" />
      <span class="slide-item--link-text">
        <slot />
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'FSlideItem'
}
</script>

<style lang="postcss" scoped>
.slide-item--link-container {
  @apply input--bg-color-default;
  @apply input--default;

  @apply text-gray-700;
  @apply flex items-center;
  @apply w-full;
  @apply py-2 px-3;
  @apply font-semibold;
  @apply rounded-lg;

  &:hover {
    @apply bg-gray-100;
  }
}

.slide-item--link-text {
  @apply ml-3;
}
</style>