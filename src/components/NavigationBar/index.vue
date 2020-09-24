<template>
  <nav class="f-nav">
    <f-container>
      <div class="flex items-center justify-between">
        <f-link href="/">
          <slot name="logo" />
        </f-link>

        <ul class="table">
          <slot v-if="$slots.menu" name="menu" />
        </ul>
      </div>
    </f-container>
  </nav>
</template>

<script>
export default {
  name: 'FNavigationBar'
}
</script>

<style lang="postcss" scoped>
.f-nav--item {
  @apply py-4;
  @apply px-3;
  @apply border-transparent;
  @apply font-semibold;

  border-bottom-width: 3px;

  &:hover {
    @apply border-gray-700;
    @apply no-underline;
  }
}
</style>