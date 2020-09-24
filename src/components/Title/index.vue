<template>
  <div class="title">
    <f-heading>{{ title }}</f-heading>
    <p class="title--desc" v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'FTitle',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  @apply pt-6 pb-8;
}

.title--desc {
  @apply text-gray-400;
  @apply font-semibold;
  @apply text-sm;

  @screen md {
    @apply text-base;
  }
}
</style>