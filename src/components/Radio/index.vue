<template>
  <label :class="['f-radio', { full }]">
    <input
      :id="uuid"
      ref="radio"
      :value="label"
      v-model="model"
      type="radio"
      class="form-radio"
    />
    <label :for="uuid" class="form-radio--text"><slot /></label>
  </label>
</template>

<script>
export default {
  name: 'FRadio',
  props: {
    value: {
      type: null,
      default: null
    },
    full: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      uuid: null
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        if (!this.$slots.default.length) {
          return
        }

        this.$emit('input', val)

        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label)
      }
    }
  },
  mounted() {
    this.uuid = this._uid
  }
}
</script>

<style lang="postcss" scoped>
.f-radio {
  @apply input--text-color-default;

  @apply inline-flex items-center;
  @apply cursor-pointer;

  @apply py-0.5;
}
.f-radio.full {
  @apply w-full;
}

.form-radio {
  @apply input--default;
  @apply input--text-color-default;

  &:hover {
    @apply input--border-hover-default;
  }

  &:focus {
    @apply input--focus;
  }
}

.form-radio--text {
  @apply ml-2;
  @apply text-xs;
  @apply cursor-pointer;

  @screen md {
    @apply text-sm;
  }
}
</style>