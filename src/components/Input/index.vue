<template>
  <span class="f-input-container">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('input', e.target.value)"
      :class="['f-input', 'f-input--' + size, { block }]"
    />
    <span
      v-if="icon"
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
    >
      <f-icon :icon="icon" class="f-input-icon" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'FInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-input-container {
  @apply relative;
  @apply w-full;

  @screen md {
    @apply w-auto;
  }
}

.f-input {
  @apply input--default;
  @apply input--border-default;
  @apply input--text-color-default;
  @apply input--bg-color-default;
  @apply input--box-shadow;

  width: inherit;

  &:focus {
    @apply shadow-outline-gray;
  }
}
.f-input.block {
  @apply inline-block !important;
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

.f-input-icon {
  @apply text-gray-400;
}
</style>
