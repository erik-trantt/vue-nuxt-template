<template>
  <div class="cb-image-field">
    <img
      :src="data.url"
      :alt="data.alt"
      :class="[
        'h-full object-cover',
        {
          'w-full': data.isStretch,
        },
      ]"
      :style="{ aspectRatio: 2 / 3 }"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CbImageData } from "./image-cta-field.vue";

@Component
export default class ImageField extends Vue {
  @Prop()
  readonly data!: CbImageData;
}
</script>
