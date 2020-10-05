<template>
  <div :class="['form-flex-container']">
    <div class="md:flex">
      <!-- Left -->
      <div class="form-flex--left-container">
        <f-heading tag="h4">{{ title }}</f-heading>
        <p v-if="description" class="form-flex--left-desc">{{ description }}</p>
        <slot name="left" />
      </div>

      <!-- Right -->
      <div class="form-flex--right-container space-y-4 md:space-y-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FFormFlexContainer',
  props: {
    title: {
      type: String,
      default: null,
      required: true
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.form-flex-container {
}

.form-flex--left-container {
  @screen sm {
    @apply flex-1;
    /* @apply w-2/5; */
  }

  @screen md {
    @apply mr-6;
    /* @apply w-5/6; */
  }
}
.form-flex--left-desc {
  @apply text-gray-400;
}

.form-flex--right-container {
  @apply mt-6;

  @screen md {
    @apply w-1/2;
    /* @apply w-auto; */
    @apply mt-0;
  }
}
</style>