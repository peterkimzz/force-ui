<template>
  <div>
    <div>Hello, {{ bundler }}</div>
    <f-button>aosdfmo</f-button>
    <f-link href="/a">go to link</f-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      bundler: "Parcel",
    };
  },
});
</script>

<style scoped>
.container {
  color: green;
}
</style>
