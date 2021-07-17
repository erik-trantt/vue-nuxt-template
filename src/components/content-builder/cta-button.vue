<template>
  <base-link :link="data" class="cb-cta-button">
    <span
      class="inline-block"
      :class="{
        'px-4 py-2 text-white bg-black hover:bg-opacity-75': data.isButton,
        'underline hover:no-underline text-blue-400': !data.isButton,
      }"
    >
      {{ data.label }}
    </span>
  </base-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CbCtaButtonData } from "./image-cta-field.vue";
import BaseLink from "~/components/base-components/base-link.vue";

@Component({ components: { BaseLink } })
export default class CbCtaButton extends Vue {
  @Prop()
  readonly data!: CbCtaButtonData;
}
</script>
