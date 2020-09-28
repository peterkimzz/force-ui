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

    <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
    <span v-if="active" class="select-item--check-icon">
      <!-- Heroicon name: check -->
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
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