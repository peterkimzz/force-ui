<template>
  <span class="f-input-container">
    <span
      v-if="prefixIcon"
      class="absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none"
    >
      <f-icon :icon="prefixIcon" class="f-input-icon" />
    </span>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('input', e.target.value)"
      :class="['f-input', 'f-input--' + size, { full, prefixIcon, suffixIcon }]"
    />
    <span
      v-if="suffixIcon"
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
    >
      <f-icon :icon="suffixIcon" class="f-input-icon" />
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
    full: {
      type: Boolean,
      default: false
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
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
  @apply w-full;
  @apply input--default;
  @apply input--border-default;
  @apply input--text-color-default;
  @apply input--bg-color-default;

  &:hover {
    @apply input--border-hover-default;
  }

  &:focus {
    @apply shadow-outline-gray;
  }

  @screen md {
    @apply input--width;
  }
}
.f-input.full {
  @apply w-full;
}
.f-input.prefixIcon {
  @apply input--prefix-icon-padding;
}
.f-input.suffixIcon {
  @apply input--suffix-icon-padding;
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
