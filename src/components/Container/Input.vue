<template>
  <div :class="['input-container']">
    <label>
      <div v-if="label" class="mb-1.5 cursor-pointer">
        <span class="input-container__label">{{ label }}</span>
        <span v-if="required" class="input-container__required-mark">*</span>
      </div>
      <slot required />
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
.input-container__label {
  @apply text-gray-700;
  @apply font-medium;
  @apply text-xs;
  @apply mb-1.5;

  @screen md {
    @apply text-sm;
  }
}
.input-container__required-mark {
  @apply text-red-600;
  @apply font-semibold;
}
</style>