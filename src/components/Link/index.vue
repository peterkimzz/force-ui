<template>
  <component
    :is="is"
    :href="href"
    :to="href"
    :target="target"
    :class="['f-link', 'f-link--' + type]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'FLink',
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self',
      validator(x) {
        return ['_self', '_blank'].indexOf(x) !== -1
      }
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(v) {
        return ['default', 'primary', 'button', 'ghost'].indexOf(v) !== -1
      }
    }
  },
  computed: {
    is() {
      if (!this.href) {
        return 'span'
      }

      if (this.target === '_blank') {
        return 'a'
      }

      return 'router-link'
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-link {
  @apply input--default;
  @apply input--text-color-default;

  @apply shadow-none;
  @apply no-underline;

  &:hover {
    @apply underline;
  }
}

.f-link--primary {
  @apply text-primary-500;
}

.f-link--button {
  @apply input--size-medium;
  @apply input--border-default;
  @apply input--bg-color-default;

  @apply font-semibold;

  &:hover {
    @apply no-underline;
    @apply input--bg-color-hover-default;
  }

  &:focus {
    @apply input--focus;
  }
}
.f-link--ghost {
  @apply input--size-medium;
  @apply input--border-default;
  @apply input--text-color-default;

  @apply font-semibold;
  @apply bg-transparent;
  @apply border-transparent;
  @apply shadow-none;

  &:hover {
    @apply input--bg-color-hover-default;
    @apply no-underline;
  }
}
</style>
