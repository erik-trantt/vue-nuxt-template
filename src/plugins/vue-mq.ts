import Vue from "vue";
import VueMq from "vue-mq";

/**
 * Augment the `vue/types/vue` module to add the `$mq` property to the `Vue`
 * interface.
 */
export type MqType = "sm" | "md" | "lg";

declare module "vue/types/vue" {
  interface Vue {
    $mq: MqType;
  }
}

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: "sm", // customize this for SSR
});
