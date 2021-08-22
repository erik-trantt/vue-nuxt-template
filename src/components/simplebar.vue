<!--
Custom cross-browser scrollbars using `simplebar` and `vue-simplebar`
https://github.com/Grsmto/simplebar
https://github.com/hfalucas/vue-simplebar
-->

<template>
  <vue-simplebar v-bind="$attrs" tag="section">
    <slot></slot>
  </vue-simplebar>
</template>

<script>
import { VueSimplebar } from "vue-simplebar";
import "vue-simplebar/dist/vue-simplebar.min.css";

export default {
  name: "Simplebar",
  components: {
    VueSimplebar,
  },
  inheritAttrs: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$attrs);
  },
};
</script>
