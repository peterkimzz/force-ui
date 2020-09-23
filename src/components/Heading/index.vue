<template>
  <component :is="tag" :class="['heading', 'heading--' + tag]"
    ><slot
  /></component>
</template>

<script>
export default {
  name: 'FHeading',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h1',
      validator(v) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(v) !== -1
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.heading {
  @apply font-bold;
  @apply input--text-color-default;
}

.heading--h1 {
  @apply text-3xl;
}
.heading--h2 {
  @apply text-2xl;
}
.heading--h3 {
  @apply text-lg;
}
.heading--h4 {
  @apply text-base;
}
.heading--h5 {
  @apply text-sm;
}
.heading--h6 {
  @apply text-xs;
}
</style>