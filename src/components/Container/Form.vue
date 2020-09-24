<template>
  <div :class="['form-container', 'form-container--' + type, { noBorder }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FFormContainer',
  props: {
    type: {
      type: String,
      required: false,
      default: 'default',
      validator(v) {
        return (
          [
            'default',
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error'
          ].indexOf(v) !== -1
        )
      }
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.form-container {
  @apply bg-white;
  @apply rounded-md;
  @apply shadow-md;

  @apply p-4;

  @screen md {
    @apply px-10 py-6;
  }
}
.form-container.noBorder {
  @apply border-0 !important;
  @apply shadow-none !important;
}

.form-container--default {
  @apply border-t-4;
  @apply border-gray-800;
}

.form-container--error {
  @apply border-2;
  @apply border-red-500;
}
</style>