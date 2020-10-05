<template>
  <div class="title">
    <p v-if="subTitle" class="sub-title">{{ subTitle }}</p>
    <f-heading>{{ title }}</f-heading>
    <p class="title--desc" v-html="description" />
  </div>
</template>

<script>
export default {
  name: 'FTitle',
  props: {
    subTitle: {
      type: String,
      default: null
    },
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
.sub-title {
  @apply leading-4;
  @apply text-sm;
}

.title {
  @apply pt-6 pb-8;
}

.title--desc {
  @apply text-gray-400;
  @apply font-semibold;
  @apply text-sm;
  @apply mt-1;

  @screen md {
    @apply mt-2;
    @apply text-base;
  }
}
</style>