<template>
  <label :class="['f-checkbox', 'block']">
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
    block: {
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
.f-checkbox {
  @apply input--text-color-default;
  @apply py-1;

  @apply flex items-center;
  @apply cursor-pointer;
}

.form-checkbox {
  @apply input--text-color-default;
  @apply input--default;
  @apply border-gray-300;

  @apply cursor-pointer;

  &:focus {
    @apply input--outline;
  }
}

.form-checkbox--text {
  @apply ml-2;
  @apply text-xs;

  @screen md {
    @apply text-sm;
  }
}
</style>