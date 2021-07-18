<template>
  <base-link
    :link="data"
    class="cb-cta-button"
    :class="{ 'pointer-events-none': isolatedLink }"
  >
    <span
      class="inline-block text-lg"
      :class="[
        {
          'px-4 py-2': data.isButton,
          'text-white bg-black border border-black hover:opacity-75':
            data.isButton && data.buttonType === 'primary',
          'text-black bg-white border border-gray-500 hover:opacity-75':
            data.isButton && data.buttonType !== 'primary',
          'underline hover:no-underline text-blue-400': !data.isButton,
        },
        {
          'pointer-events-auto': isolatedLink,
        },
      ]"
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

  @Prop({ default: false })
  readonly isolatedLink!: boolean;
}
</script>
