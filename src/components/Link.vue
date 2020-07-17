<template>
  <component
    :is="is"
    :href="href"
    :to="href"
    :target="target"
    :class="['force-link']"
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
.force-link {
  @apply inline-block;
  @apply text-gray-800;

  &:hover {
    @apply underline;
  }
}
</style>
