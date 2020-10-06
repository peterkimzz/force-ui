<template>
  <button
    :class="[
      'f-button',
      'f-button--' + color,
      'f-button--' + size,
      {
        plain,
        round,
        block
      }
    ]"
    @click="OnClick"
  >
    <f-spinner v-if="loading" class="" />
    <span v-else class="flex items-center justify-center">
      <f-icon v-if="prefixIcon" :icon="prefixIcon" class="mr-2" />
      <slot />
      <f-icon v-if="suffixIcon" :icon="suffixIcon" class="ml-2" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'FButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      required: false,
      default: 'default',
      validator(v) {
        return (
          [
            'default',
            'black',
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error',
            'ghost'
          ].indexOf(v) !== -1
        )
      }
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(v) {
        return ['small', 'medium', 'large'].indexOf(v) !== -1
      }
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    href: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    OnClick() {
      if (!this.href) {
        return this.$emit('click')
      }

      if (this.target === '_blank') {
        return window.open(this.href)
      }

      location.href = this.href
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-button {
  @apply input--default;
  @apply input--border-default;

  @apply align-middle;
  @apply font-semibold;
  @apply w-full;

  &:focus {
    @apply input--focus;
  }

  @screen md {
    @apply w-auto;
  }
}
.f-button.round {
  @apply rounded-full;
}
.f-button.block {
  @apply w-full;
  @apply block;
}

/** Size */
.f-button--small {
  @apply input--size-small;
}
.f-button--small.round {
  @apply p-1;
  @apply w-auto;
}

.f-button--medium {
  @apply input--size-medium;
}
.f-button--medium.round {
  @apply p-2;
  @apply w-auto;
}

.f-button--large {
  @apply input--size-large;
}
.f-button--large.round {
  @apply p-4;
  @apply w-auto;
}

/** Type */
.f-button--default {
  @apply input--bg-color-default;
  @apply input--text-color-default;

  &:hover {
    @apply input--bg-color-hover-default;
  }
}
.f-button--default.plain {
  @apply bg-gray-200;
  @apply text-gray-700;

  &:hover {
    @apply bg-gray-100;
  }
}

.f-button--black {
  @apply text-gray-100;
  @apply bg-gray-900;
  @apply border-gray-900;

  &:hover {
    @apply bg-gray-700;
  }
}

.f-button--primary {
  @apply bg-primary-500;
  @apply border-primary-100;
  @apply text-white;

  &:hover {
    @apply bg-primary-400;
  }
}
.f-button--primary.plain {
  @apply border-primary-500;
  @apply bg-white;
  @apply text-primary-500;
}

.f-button--secondary {
  @apply bg-secondary-500;
  @apply text-white;

  &:hover {
    @apply bg-secondary-400;
  }
}
.f-button--secondary.plain {
  @apply border-secondary-500;
  @apply bg-white;
  @apply text-secondary-500;
}

.f-button--info {
  @apply bg-gray-400;
  @apply text-gray-800;
}
.f-button--info.plain {
  @apply bg-gray-100;
  @apply border-gray-200;
  @apply text-gray-900;
}

.f-button--success {
  @apply bg-green-400;
  @apply text-green-800;
}
.f-button--success.plain {
  @apply bg-green-100;
  @apply border-green-200;
  @apply text-green-900;
}

.f-button--warning {
  @apply bg-yellow-400;
  @apply text-yellow-900;
}
.f-button--warning.plain {
  @apply bg-yellow-100;
  @apply border-yellow-200;
  @apply text-yellow-700;
}

.f-button--error {
  @apply bg-red-500;
  @apply text-red-700;
}
.f-button--error.plain {
  @apply bg-red-100;
  @apply border-red-200;
  @apply text-red-900;
}

.f-button--ghost {
  @apply bg-transparent;
  @apply text-gray-900;
  @apply border-transparent;
  @apply shadow-none;

  &:hover {
    @apply bg-gray-100;
  }
}
</style>