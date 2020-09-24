<template>
  <input
    :value="value"
    :placeholder="placeholder"
    @input="(e) => $emit('input', e.target.value)"
    :class="['f-input', 'f-input--' + size]"
  />
</template>

<script>
export default {
  name: 'FInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(v) {
        return ['small', 'medium', 'large'].indexOf(v) !== -1
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-input {
  @apply input--default;
  @apply input--border-default;
  @apply input--text-color-default;
  @apply input--bg-color-default;
  @apply input--box-shadow;

  &:focus {
    @apply shadow-outline-gray;
  }
}
.f-input.block {
  @apply block;
  @apply w-full;
}

/** Size */
.f-input--small {
  @apply input--size-small;
}
.f-input--medium {
  @apply input--size-medium;
}
.f-input--large {
  @apply input--size-large;
}
</style>