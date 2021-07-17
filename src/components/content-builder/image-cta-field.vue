<template>
  <div class="cb-image-cta-field">
    <div class="relative">
      <div v-if="!isOverlay" class="relative">
        <base-link :link="link" class="absolute inset-0 inline-block">
          <img
            :src="image.url"
            :alt="image.alt"
            :class="[
              'h-auto object-cover',
              {
                'w-full': image.isStretch,
              },
            ]"
            :style="{ aspectRatio: 2 / 3 }"
          />
        </base-link>
      </div>
      <img
        v-else
        :src="image.url"
        :alt="image.alt"
        :class="[
          'h-full object-cover',
          {
            'w-full': image.isStretch,
          },
        ]"
        :style="{ aspectRatio: 2 / 3 }"
      />
      <cb-cta-button
        :data="link"
        :class="[
          { 'absolute inset-0': isOverlay, 'inline-block py-2': !isOverlay },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CbCtaButton from "./cta-button.vue";
import BaseLink from "~/components/base-components/base-link.vue";

export interface CbImageData {
  url: string;
  alt: string | null;
  isStretch: boolean;
}
/**
 * TODO: content builder generic button
 */
export interface CbCtaButtonData {
  href: string | undefined;
  path: string | undefined;
  label: string;
  isButton: boolean;
  buttonType: "primary" | "secondary";
  position:
    | "above"
    | "below"
    | "inside-center"
    | "inside-top"
    | "inside-bottom";
}
export interface CbImageCtaFieldData {
  type: string;
  image: CbImageData;
  link: CbCtaButtonData;
}

enum OverlayPositions {
  InsideTop = "inside-top",
  InsideCenter = "inside-center",
  InsideBottom = "inside-bottom",
}

@Component({ components: { CbCtaButton, BaseLink } })
export default class ImageCtaField extends Vue {
  @Prop()
  readonly data!: CbImageCtaFieldData;

  readonly image: CbImageData = this.data.image;

  readonly link: CbCtaButtonData = this.data.link;

  get isOverlay(): boolean {
    const hasLabel = this.link.label.trim().length === 0;

    const hasPosition = () => {
      if (!("position" in this.link)) return false;

      return (Object.values(OverlayPositions) as string[]).includes(
        this.link.position
      );
    };

    return hasLabel || hasPosition();
  }
}
</script>
