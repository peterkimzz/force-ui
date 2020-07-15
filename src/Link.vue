<template>
  <component
    :is="is"
    :href="href"
    :to="href"
    :target="target"
    :class="['forceLink']"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "FLink",
  props: {
    href: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
  computed: {
    is() {
      if (!this.href) {
        return "span";
      }

      if (this.target === "_blank") {
        return "a";
      }

      return "router-link";
    },
  },
};
</script>

<style>
.forceLink {
  display: inline-block;
  color: #333;
}
</style>
