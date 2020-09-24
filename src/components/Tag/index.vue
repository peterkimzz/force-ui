<template>
  <span
    :class="[
      'f-tag',
      'f-tag--' + type,
      'f-tag--' + size,
      {
        plain
      }
    ]"
    @click="(e) => $emit('click', e)"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'FTag',
  props: {
    type: {
      type: String,
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
            'error'
          ].indexOf(v) !== -1
        )
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(v) {
        return ['medium'].indexOf(v) !== -1
      }
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-tag {
  @apply font-bold;

  @apply input--default;
  @apply input--border-default;
  @apply input--box-shadow;
}

/** Size */
.f-tag--medium {
  @apply text-xs;
  @apply px-2 py-1;
}

/** Type */
.f-tag--default {
  @apply input--bg-color-default;
  @apply input--text-color-default;
}
.f-tag--default.plain {
  @apply bg-gray-200;
  @apply text-gray-700;

  &:hover {
    @apply bg-gray-100;
  }
}

.f-tag--black {
  @apply text-gray-100;
  @apply bg-gray-900;
  @apply border-gray-900;
}

.f-tag--primary {
  @apply bg-primary-500;
  @apply border-primary-100;
  @apply text-white;

  &:hover {
    @apply bg-primary-400;
  }
}
.f-tag--primary.plain {
  @apply border-primary-500;
  @apply bg-white;
  @apply text-primary-500;
}

.f-tag--secondary {
  @apply bg-secondary-500;
  @apply text-white;

  &:hover {
    @apply bg-secondary-400;
  }
}
.f-tag--secondary.plain {
  @apply border-secondary-500;
  @apply bg-white;
  @apply text-secondary-500;
}

.f-tag--info {
  @apply bg-blue-700;
  @apply text-blue-100;
  @apply border-blue-700;
}
.f-tag--info.plain {
  @apply bg-blue-100;
  @apply text-blue-700;
  @apply border-blue-200;
}

.f-tag--success {
  @apply bg-green-400;
  @apply text-green-100;
  @apply border-green-400;
}
.f-tag--success.plain {
  @apply bg-green-100;
  @apply text-green-700;
  @apply border-green-200;
}

.f-tag--warning {
  @apply bg-yellow-300;
  @apply text-yellow-100;
  @apply border-yellow-300;
}
.f-tag--warning.plain {
  @apply bg-yellow-100;
  @apply text-yellow-700;
  @apply border-yellow-200;
}

.f-tag--error {
  @apply bg-red-700;
  @apply text-red-100;
  @apply border-red-700;
}
.f-tag--error.plain {
  @apply bg-red-100;
  @apply text-red-700;
  @apply border-red-200;
}
</style>