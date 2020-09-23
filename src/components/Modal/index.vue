<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="value" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center md:block md:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden md:inline-block md:align-middle md:h-screen"></span>

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          enter-to-class="opacity-100 translate-y-0 md:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 md:scale-100"
          leave-to-class="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
        >
          <div
            v-show="value"
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 md:align-middle md:max-w-lg md:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 md:p-6 md:pb-4">
              <div class="md:flex md:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 md:mx-0 md:h-10 md:w-10"
                >
                  <svg
                    class="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Deactivate account
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm leading-5 text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal--bottom-container">
              <f-button
                type="primary"
                class="modal--bottom-btn"
                @click="$emit('input', false)"
                >{{ confirmLabel }}</f-button
              >
              <f-button
                class="modal--bottom-btn mt-2 md:mt-0"
                @click="$emit('input', false)"
                >{{ cancelLabel }}</f-button
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    confirmLabel: {
      type: String,
      default: 'Confirm'
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
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

<style lang="postcss" scoped>
.modal--bottom-container {
  @apply bg-gray-50;
  @apply px-4 py-3;
  @apply text-right;

  @screen md {
    /* @apply flex;
    @apply flex-row-reverse; */

    @apply px-6;
  }
}

.modal--bottom-btn {
  @apply w-full;

  @screen md {
    @apply w-auto;
  }
}
</style>