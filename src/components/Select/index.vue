<template>
  <span
    :class="['f-select', { block }]"
    v-click-outside="() => (isOpen = false)"
    @keydown.esc="OnEsc"
  >
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
    <transition
      enter-active-class="transform duration-150"
      enter-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform duration-300"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
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
    </transition>
  </span>
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
    },
    block: {
      type: Boolean,
      default: false
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
    },
    OnEsc() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-select {
  @apply relative;
  @apply w-full;

  @screen md {
    /* min-width: 200px;
    width: 100%; */
  }
}
.f-select.block {
  @apply inline-block !important;
  @apply w-full;
}

.select-btn {
  @apply input--default;
  @apply input--box-shadow;
  @apply input--border-default;
  @apply input--text-color-default;
  @apply input--bg-color-default;
  @apply input--size-medium;
  @apply input--suffix-icon-padding;

  width: inherit;

  &:focus {
    @apply input--outline;
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
    @apply text-sm;
  }
}
</style>