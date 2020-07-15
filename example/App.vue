<template>
  <div class="bg-indigo-100">
    <div>Hello, {{ bundler }}</div>
    <f-button type="primary">aosdfmo</f-button>
    <f-button>qowimfoqiwmfoiqmwf</f-button>
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
