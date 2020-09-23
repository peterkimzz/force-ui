<template>
  <label class="radio">
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
.radio {
  @apply inline-flex;
  @apply items-center;
  @apply cursor-pointer;
}

.form-radio {
  @apply input--text-color-default;
  @apply cursor-pointer;

  &:focus {
    @apply input--outline;
    @apply border-gray-300;
  }
}

.form-radio--text {
  @apply cursor-pointer;
  @apply input--text-color-default;
  @apply ml-2;
}
</style>