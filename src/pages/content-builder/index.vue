<template>
  <div>
    <span
      v-for="(componentData, index) in data"
      :key="'cb-fields-' + componentData.type + index"
    >
      <cb-fields :data="componentData" />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CbFields from "~/components/content-builder/fields.vue";

@Component({
  head: {
    title: "Content Builder",
  },
  components: { CbFields },
})
export default class ContentBuilderPage extends Vue {
  data: unknown = [
    {
      type: "group",
      direction: "horizontal",
      isCenter: true,
      itemsPerRow: 3,
      itemWithds: [33.33333, 33.33333, 33.33333],
      children: [
        {
          type: "image-cta",
          children: [
            {
              type: "image",
              url: "",
              alt: "cta image 1",
            },
            {
              type: "link",
              href: "",
              label: "",
              isButton: true,
              buttonType: "primary",
              position: "above",
            },
          ],
        },
        {
          type: "image-cta",
          children: [
            {
              type: "image",
              url: "",
              alt: "",
            },
            {
              type: "link",
              href: "",
              label: "",
              isButton: true,
              buttonType: "primary",
              position: "below",
            },
          ],
        },
        {
          type: "image-cta",
          children: [
            {
              type: "image",
              url: "",
              alt: "",
            },
            {
              type: "link",
              href: "",
              label: "",
              isButton: true,
              buttonType: "primary",
              position: "inside-center",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      url: "",
      alt: "parent image",
    },
  ];
}
</script>
