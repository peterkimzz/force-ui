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
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    size: {
      type: String,
      required: false,
      default: 'default',
      validator(v) {
        return ['small', 'default', 'large'].indexOf(v) !== -1
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.f-input {
}

/** Size */
.f-input--small {
  @apply btn-size-small;
}
.f-input--default {
  @apply btn-size-default;
}
.f-input--large {
  @apply btn-size-large;
}
</style>
