<template>
  <div class="space-y-1" v-click-outside="() => (isOpen = false)">
    <div class="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="select-btn"
        @click="isOpen = !isOpen"
      >
        <div class="flex items-center space-x-3">
          <span :class="['select-text', { unselected: !this.value }]">{{
            SelectItemText
          }}</span>
        </div>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <f-icon icon="Selector" class="text-gray-400" />
        </span>
      </button>

      <div v-show="isOpen && items.length" class="select--item-container">
        <ul tabindex="-1" role="listbox" class="select--item-wrapper">
          <f-select-item
            v-for="item in items"
            :key="item.title"
            :value="item.value"
            :active="value === item.value"
            @click="OnSelectItem"
            >{{ item.title }}</f-select-item
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FSelect',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: false,
      selected: null
    }
  },
  computed: {
    SelectItemText() {
      const item = this.items.find((item) => item.value === this.value)

      if (!item) {
        return this.placeholder
      }

      return item.title
    }
  },
  methods: {
    OnSelectItem(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="postcss" scoped>
.select-btn {
  @apply input--default;
  @apply input--box-shadow;
  @apply input--border-default;
  @apply input--text-color-default;
  @apply input--bg-color-default;

  @apply input--size-medium;
  @apply font-semibold;

  @apply w-full;

  /* @apply cursor-default relative w-full rounded-lg border border-gray-300 bg-white pl-3 pr-10 py-2 text-left  transition ease-in-out duration-150; */

  &:focus {
    @apply outline-none shadow-outline-gray;
  }
}
.select-text {
  @apply block truncate;
}
.select-text.unselected {
  @apply text-gray-400;
}

.select--item-container {
  @apply absolute mt-1 w-full rounded-md bg-white shadow-lg;
}
.select--item-wrapper {
  @apply max-h-56 rounded-md py-1 shadow-xs overflow-auto;

  &:focus {
    @apply outline-none;
  }

  @screen sm {
    @apply text-sm leading-5;
  }
}
</style>