<template>
  <div class="flex-col w-full px-4 md:px-20 lg:px-28">
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
            isStretch: false,
          },
          link: {
            type: "link",
            href: "/",
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
            href: "/",
            label: "Link 1",
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
            isStretch: false,
          },
          link: {
            type: "link",
            href: "/",
            label: "Link 2",
            isButton: true,
            buttonType: "secondary",
            position: "inside-bottom",
          },
        },
      ],
    },
    {
      type: "link",
      href: "/",
      label: "back to homepage",
      isButton: false,
      buttonType: "secondary",
      position: "inside-center",
    },
  ];
}
</script>
