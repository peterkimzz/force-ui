<template>
  <label class="checkbox">
    <input
      :id="uuid"
      type="checkbox"
      :value="value"
      :checked="!!this.value"
      :class="['form-checkbox']"
      @input="(e) => $emit('input', !this.value)"
    />
    <span class="form-checkbox--text"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'FCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      uuid: null
    }
  },
  mounted() {
    this.uuid = this._uid
  }
}
</script>

<style lang="postcss" scoped>
.checkbox {
  @apply inline-flex items-center;
  @apply cursor-pointer;
}

.form-checkbox {
  @apply input--text-color-default;
  @apply cursor-pointer;

  &:focus {
    @apply input--outline;
    @apply border-gray-300;
  }
}

.form-checkbox--text {
  @apply cursor-pointer;
  @apply input--text-color-default;
  @apply ml-2;
}
</style>