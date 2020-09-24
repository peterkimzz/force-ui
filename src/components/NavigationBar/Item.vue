<template>
  <li class="table-cell">
    <f-link v-bind="$attrs" class="f-nav--item"><slot /></f-link>
  </li>
</template>

<script>
export default {
  name: 'FNavigationBarItem'
}
</script>

<style lang="postcss" scoped>
.f-nav--item {
  @apply py-5;
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