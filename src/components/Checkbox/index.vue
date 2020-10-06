<template>
  <label :class="['f-checkbox']">
    <input
      :id="uuid"
      type="checkbox"
      :value="value"
      :checked="!!this.value"
      :class="['form-checkbox']"
      @input="(e) => $emit('input', !this.value)"
    />
    <div class="f-checkbox--text-container">
      <div class="form-checkbox--text"><slot /></div>
      <div v-if="$slots.description" class="f-checkbox--text-desc">
        <slot name="description" />
      </div>
    </div>
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

  @apply flex;
  @apply cursor-pointer;

  @apply py-1.5;
}

.form-checkbox {
  @apply input--default;
  @apply input--text-color-default;

  @apply border-gray-300;
  @apply cursor-pointer;

  &:hover {
    @apply input--border-hover-default;
  }

  &:focus {
    @apply input--focus;
  }
}

.f-checkbox--text-container {
  @apply ml-2;
}
.form-checkbox--text {
  @apply text-xs;
  @apply leading-4;

  @screen md {
    @apply text-sm;
  }
}

.f-checkbox--text-desc {
  @apply text-xs text-gray-500 mt-1.5;

  @screen md {
    @apply text-sm;
  }
}
</style>