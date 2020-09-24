<template>
  <div :class="['input-container']">
    <label>
      <div v-if="label" class="mb-1.5 cursor-pointer">
        <span class="input-container__label">{{ label }}</span>
        <span v-if="required" class="input-container__required-mark">*</span>
      </div>
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'FInputContainer',
  props: {
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.input-container {
}

.input-container__label {
  @apply text-gray-600;
  @apply font-semibold;
  @apply mb-1.5;
  @apply text-sm;

  @screen md {
    @apply text-base;
  }
}
.input-container__required-mark {
  @apply text-red-600;
  @apply font-semibold;
}
</style>