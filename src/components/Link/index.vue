<template>
  <component
    :is="is"
    :href="href"
    :to="href"
    :target="target"
    :class="['link', 'link--' + type]"
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
      default: null,
      validator(v) {
        return ['default', 'primary', 'button'].indexOf(v) !== -1
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
.link {
  @apply no-underline;
  @apply input--default;
  @apply input--text-color-default;

  &:hover {
    @apply underline;
  }
}

.link--button {
  @apply font-bold;

  @apply input--border-default;
  @apply input--bg-color-default;
  @apply input--size-medium;

  &:hover {
    @apply no-underline;
    @apply input--bg-color-default-hover;
  }
}
</style>
