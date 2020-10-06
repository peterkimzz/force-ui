<template>
  <li role="option" :class="['select-item', { active }]" @click="OnSelectItem">
    <div class="flex items-center space-x-3">
      <!-- <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
        class="flex-shrink-0 h-6 w-6 rounded-full"
      /> -->
      <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
      <span class="block truncate"><slot /></span>
    </div>

    <span v-if="active" class="select-item--check-icon">
      <f-icon icon="Check" />
    </span>
  </li>
</template>

<script>
export default {
  name: 'FSelectItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    OnSelectItem() {
      this.$emit('click', this.value || this.$slots.default[0].text)
    }
  }
}
</script>

<style lang="postcss" scoped>
.select-item {
  @apply relative;
  @apply cursor-default select-none;
  @apply input--text-color-default;
  @apply input--bg-color-default;
  @apply input--size-medium;

  &:hover {
    @apply text-white bg-gray-900 cursor-pointer;
  }
}

.select-item.active {
  @apply font-semibold;
}

.select-item--check-icon {
  @apply absolute inset-y-0 right-0 flex items-center pr-4;
}
</style>