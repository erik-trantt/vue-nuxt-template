<template>
  <simplebar v-bind="$attrs" data-simplebar-scrollbar-min-width="60">
    <slot></slot>
  </simplebar>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  name: "Simplebar",
  components: {
    simplebar,
  },
  inheritAttrs: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$attrs);
  },
};
</script>
