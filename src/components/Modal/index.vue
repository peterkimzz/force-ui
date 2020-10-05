<template>
  <div
    :class="['f-modal', { active: value }]"
    @keydown.esc="$emit('input', false)"
  >
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="value" class="fixed inset-0 transition">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
    </transition>

    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="value"
        class="f-modal--panel"
        v-click-outside="() => $emit('input', false)"
      >
        <div>
          <div class="f-modal--header">
            <f-heading tag="h3">{{ title }}</f-heading>
            <f-button round @click="$emit('input', false)"
              ><f-icon icon="Close"
            /></f-button>
          </div>

          <div class="f-modal--body">
            <slot />
          </div>

          <div v-if="!noFooter" class="f-modal--footer">
            <f-button
              color="black"
              class="f-modal--footer__confirm"
              @click="OnConfirm"
              >{{ confirmLabel }}</f-button
            >
            <f-button class="f-modal--footer__cancel" @click="OnCancel">{{
              cancelLabel
            }}</f-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title of alert'
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
        document.onkeydown = (e) => {
          if (e.keyCode === 27) {
            this.$emit('input', false)
          }
        }
      } else {
        document.documentElement.style.overflow = 'auto'
        document.onkeydown = null
      }
    }
  },
  methods: {
    OnConfirm() {
      this.$emit('on-confirm')
    },
    OnCancel() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-modal {
  @apply hidden;
}
.f-modal.active {
  @apply fixed inset-0;

  @apply flex items-center justify-center;
}

.f-modal--panel {
  /* @apply flex items-center justify-center bg-white transform transition-all; */
  @apply bg-white transition-all transform;
  @apply rounded-lg;
  @apply overflow-hidden;
  @apply shadow-lg;

  @apply w-full max-w-screen-md;
}

.f-modal--header {
  @apply flex items-center justify-between;
  @apply p-4;
}

.f-modal--body {
  @apply px-4 pb-8;
}

.f-modal--footer {
  @apply px-4 py-3;
  @apply bg-gray-50;

  @apply text-right;
}
.f-modal--footer__cancel {
  @apply mt-2;

  @screen md {
    @apply mt-0;
    @apply ml-1;
  }
}
</style>