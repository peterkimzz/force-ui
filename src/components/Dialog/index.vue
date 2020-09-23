<template>
  <transition
    enter-active-class="transform transition ease-in-out duration-500"
    enter-class="translate-y-full bg-opacity-0"
    enter-to-class="translate-y-0 bg-opacity-100"
    leave-active-class="transform transition ease-in-out duration-500"
    leave-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div
      v-show="value"
      class="fixed z-40 inset-0 overflow-y-auto bg-opacity-50 bg-gray-500"
    >
      <div class="flex flex-col h-full max-h-full bg-white">
        <div class="flex flex-shrink-0 border-b border-gray-200">
          <f-container class="py-4">
            <div class="flex items-center justify-between">
              <div class="font-semibold text-lg">{{ title }}</div>
              <f-button round @click="$emit('input', false)">
                <f-close-icon />
              </f-button>
            </div>
          </f-container>
        </div>

        <div class="flex-auto overflow-auto">
          <f-container class="py-10">
            <slot />
          </f-container>
        </div>

        <div
          v-if="$slots.bottom"
          style="flex: 0 0 auto"
          class="border-t border-gray-200"
        >
          <f-container class="py-4">
            <slot name="bottom" />
          </f-container>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import FCloseIcon from '../Icon/Close'
export default {
  name: 'FDialog',
  components: {
    FCloseIcon
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    }
  },
  watch: {
    value(v) {
      if (v) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  }
}
</script>