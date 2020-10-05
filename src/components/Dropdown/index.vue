<template>
  <div
    v-click-outside="() => (isOpen = false)"
    @keydown.esc="OnEsc"
    class="f-dropdown"
  >
    <div>
      <f-button
        v-bind="$attrs"
        aria-haspopup="true"
        aria-expanded="true"
        @click="OnButton"
      >
        {{ placeholder }}
      </f-button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-show="isOpen" class="f-dropdown--panel">
        <div class="rounded-lg bg-white shadow-xs">
          <slot />
          <div
            v-if="!$slots.default"
            class="px-4 py-3 text-sm text-gray-700 w-56"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            No content.
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FDropdown',
  props: {
    placeholder: {
      type: String,
      default: 'Options'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    OnButton() {
      this.isOpen = !this.isOpen
    },
    OnEsc() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-dropdown {
  @apply relative inline-block text-left;
}
.f-dropdown--panel {
  @apply origin-top-left absolute left-0 mt-2 rounded-lg shadow-lg;
}
</style>