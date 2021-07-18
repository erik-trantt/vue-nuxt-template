<template>
  <div class="cb-image-cta-field">
    <div class="relative">
      <div class="relative">
        <!-- give slot value as null/undefined to render empty string, bypass rendering link.label -->
        <base-link v-if="!isOverlay" :link="link" class="absolute inset-0">
          {{ undefined }}
        </base-link>
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
      </div>
      <cb-cta-button
        :data="link"
        class="h-full"
        :isolated-link="!isOverlay"
        :class="[
          'justify-center',
          {
            'inline-block py-4': !isOverlay,
            'w-full text-center': !isOverlay && link.isCenter,
            'absolute inset-0 p-4 inline-flex': isOverlay,
            'items-start': Boolean(
              link.position && link.position.match(/-top$/)
            ),
            'items-center': Boolean(
              link.position && link.position.match(/-center$/)
            ),
            'items-end': Boolean(
              link.position && link.position.match(/-bottom$/)
            ),
          },
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
  isCenter: boolean;
  buttonType: "primary" | "secondary";
  position?:
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
    if (!this.link.position) return false;

    const hasLabel = this.link.label.trim().length === 0;

    const hasPosition = (Object.values(OverlayPositions) as string[]).includes(
      this.link.position
    );

    return hasLabel || hasPosition;
  }
}
</script>
