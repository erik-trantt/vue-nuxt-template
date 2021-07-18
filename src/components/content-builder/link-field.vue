<template>
  <div
    class="cb-link-field"
    :class="{
      'text-center': data.isCenter,
    }"
  >
    <cb-cta-button :data="data" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CbCtaButton from "./cta-button.vue";
import { CbCtaButtonData } from "./image-cta-field.vue";
import BaseLink from "~/components/base-components/base-link.vue";

@Component({ components: { BaseLink, CbCtaButton } })
export default class LinkField extends Vue {
  @Prop()
  readonly data!: CbCtaButtonData;
}
</script>
