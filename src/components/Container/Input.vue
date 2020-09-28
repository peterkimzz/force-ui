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
  /* @apply flex-1; */
  /* flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0%; */
}

.input-container__label {
  @apply text-gray-700;
  @apply font-medium;
  @apply leading-5;
  @apply mb-1.5;
  @apply text-xs;

  @screen md {
    @apply text-sm;
  }
}
.input-container__required-mark {
  @apply text-red-600;
  @apply font-semibold;
}
</style>