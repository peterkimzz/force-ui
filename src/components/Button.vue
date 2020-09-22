<template>
  <button
    :class="[
      'f-button',
      'f-button--' + type,
      'f-button--' + size,
      {
        plain,
      },
    ]"
    class="btn-default"
    @click="OnClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FButton',
  props: {
    type: {
      type: String,
      required: false,
      default: null,
      validator(v) {
        return (
          [
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error',
            'transparent',
          ].indexOf(v) !== -1
        )
      },
    },
    size: {
      type: String,
      required: false,
      default: 'default',
      validator(v) {
        return ['mini', 'small', 'default', 'large'].indexOf(v) !== -1
      },
    },
    target: {
      type: String,
      default: '_self',
    },
    href: {
      type: String,
      default: null,
    },
    plain: {
      type: Boolean,
      default: false,
    },
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
    },
  },
}
</script>

<style lang="postcss" scoped>
/** Size */
.f-button--small {
  @apply btn-size-small;
}
.f-button--default {
  @apply btn-size-default;
}
.f-button--large {
  @apply btn-size-large;
}

/** Type */
.f-button--primary {
  @apply bg-primary-500;
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

.f-button--transparent {
  @apply bg-transparent;
  @apply text-gray-900;
  @apply border-transparent;

  &:hover {
    @apply bg-gray-100;
  }
}
</style>