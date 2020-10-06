<template>
  <button :class="['f-tab--item', { active }]" @click="OnClick">
    <transition
      enter-active-class="ease-in-out duration-150"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-150"
      leave-class=" opacity-100"
      leave-to-class="opacity-0"
    >
      <span v-if="active" class="f-tab--dot">·</span>
    </transition>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FTabItem',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    OnClick() {
      if (!this.$slots.default) {
        return
      }

      const slot = this.$slots.default[0]

      this.$emit('click', slot.text)
    }
  }
}
</script>

<style lang="postcss" scoped>
.f-tab--item {
  @apply transition-colors;

  @apply relative;
  @apply inline-block;
  @apply outline-none;

  @apply px-2 py-4;

  @apply text-sm;
  @apply font-bold;
  @apply input--text-color-placeholder;

  &:hover {
    @apply text-gray-500;
  }

  @screen md {
    @apply text-base;
  }
}

.f-tab--item.active {
  @apply input--text-color-default;
}

.f-tab--dot {
  @apply transition-all;

  @apply absolute;
  @apply text-4xl;
  @apply font-bold;

  top: -1.25rem;
  left: calc(50% - 4.5px);
}
</style>