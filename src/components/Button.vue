<template>
  <button
    :class="['force-button', 'force-button--' + type, 'force-button--' + size]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "FButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(x) {
        return ["primary", "success", "error"].indexOf(x) !== -1;
      },
    },
    size: {
      type: String,
      required: false,
      default: "default",
      validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.force-button {
  @apply outline-none;

  @apply bg-white;
  @apply text-black;
  @apply border border-gray-200;
  @apply font-semibold;

  @apply px-4 py-2;
  @apply rounded;

  &--primary {
    @apply bg-primary;
    @apply text-white;
  }
}
</style>
