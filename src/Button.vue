<template>
  <button
    :class="['forceButton', 'forceButton--' + type, 'forceButton--' + size]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ForceButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "default",
    },
    size: {
      type: String,
      required: false,
      default: "default",
    },
  },
};
</script>

<style>
.forceButton {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
}

.forceButton--default {
  background-color: #0194ef;
}

.forceButton--success {
  background-color: #1bb934;
}

.forceButton--error {
  background-color: #e1112c;
}

.forceButton--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}

.forceButton--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}

.forceButton--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}
</style>
