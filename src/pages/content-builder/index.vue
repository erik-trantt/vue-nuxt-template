<template>
  <div class="w-full px-4 md:px-20 lg:px-28 space-y-4">
    <cb-fields
      v-for="(componentData, index) in data"
      :key="'cb-fields-' + componentData.type + index"
      :data="componentData"
    />
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
          image: {
            type: "image",
            url: "https://via.placeholder.com/200x300.jpg?text=ratio+2:3",
            alt: "cta image 1",
            isStretch: true,
          },
          link: {
            type: "link",
            path: "",
            label: "Button 1",
            isCenter: true,
            isButton: true,
            buttonType: "primary",
            position: "above",
          },
        },
        {
          type: "image-cta",
          image: {
            type: "image",
            url: "https://via.placeholder.com/200x300.jpg?text=ratio+2:3",
            alt: "cta image 2",
            isStretch: true,
          },
          link: {
            type: "link",
            path: "",
            label: "",
            isCenter: false,
            isButton: false,
            buttonType: "primary",
            position: "below",
          },
        },
        {
          type: "image-cta",
          image: {
            type: "image",
            url: "https://via.placeholder.com/200x300.jpg?text=ratio+2:3",
            alt: "cta image 3",
            isStretch: true,
          },
          link: {
            type: "link",
            path: "",
            label: "Link 2",
            isButton: true,
            isCenter: true,
            buttonType: "secondary",
            position: "inside-bottom",
          },
        },
      ],
    },
    {
      type: "link",
      path: "",
      label: "internal link back to homepage",
      isButton: true,
      isCenter: true,
      buttonType: "primary",
    },
    {
      type: "link",
      href: "/",
      label: "this an external link to homepage",
      isButton: false,
      isCenter: true,
      buttonType: "secondary",
    },
  ];
}
</script>
