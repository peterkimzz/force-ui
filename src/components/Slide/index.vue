<template>
  <transition
    enter-active-class="ease-in-out duration-500"
    enter-class="bg-opacity-0"
    enter-to-class="bg-opacity-75"
    leave-active-class="ease-in-out duration-500"
    leave-class=" bg-opacity-75"
    leave-to-class="bg-opacity-0"
  >
    <div v-show="value" class="slide">
      <div class="slide--inner">
        <div class="slide--section">
          <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div
              v-click-outside="vcoConfig"
              v-show="value"
              class="relative w-screen max-w-md"
            >
              <div
                class="h-full pb-10 flex flex-col space-y-6 bg-white shadow-xl overflow-y-scroll"
              >
                <header class="slide--header-container">
                  <h2 v-show="title" class="slide--header__title">
                    {{ title }}
                  </h2>
                  <f-button
                    aria-label="Close slide"
                    class="slide--header__close"
                    round
                    @click="OnClose"
                  >
                    <f-icon icon="Close" />
                  </f-button>
                </header>
                <div class="relative flex-1">
                  <slot />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FSlide',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      vcoConfig: {
        handler: this.Close,
        middleware: (e) => {
          return e.target.className === 'slide--inner'
        },
        events: ['dblclick', 'click'],
        isActive: true,
        detectIFrame: true
      }
    }
  },
  watch: {
    $route() {
      this.$emit('input', false)
    },
    value(v) {
      if (v) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    }
  },
  methods: {
    Close() {
      this.$emit('input', false)
    },
    OnClose() {
      this.Close()
    }
  }
}
</script>

<style lang="postcss" scoped>
.slide {
  @apply fixed inset-0 overflow-hidden z-50 bg-gray-500 bg-opacity-75;
}

.slide--inner {
  @apply absolute inset-0 overflow-hidden;
}

.slide--section {
  @apply absolute inset-y-0 right-0 max-w-full flex;
}

.slide--header-container {
  @apply flex items-center justify-between flex-row-reverse;
  @apply px-4 py-6;
}
.slide--header__title {
  @apply text-base text-gray-900;
  @apply font-semibold;
}
</style>