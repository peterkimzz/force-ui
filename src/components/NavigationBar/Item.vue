<template>
  <li class="table-cell">
    <f-link v-bind="$attrs" class="f-nav--item" type="ghost"><slot /></f-link>
  </li>
</template>

<script>
export default {
  name: 'FNavigationBarItem'
}
</script>

<style lang="postcss" scoped>
.f-nav--item {
  @apply my-4;
}
</style>