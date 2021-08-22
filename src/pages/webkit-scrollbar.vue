<!--
Custom cross-browser scrollbars using `simplebar` and `simplebar-vue`
https://github.com/Grsmto/simplebar
https://www.npmjs.com/package/simplebar-vue

For Chrome and webkit browsers.
-->

<template>
  <div class="h-screen w-full flex flex-col">
    <h1 class="text-4xl">Different scrollbars</h1>
    <h3 class="text-xl">horizontal</h3>
    <simplebar
      class="
        webkit-scrollbar
        horizontal-scrollbar
        overflow-x-auto overflow-y-hidden
        border
        flex
        mb-4
        h-16
      "
      style="height: 72px"
      data-simplebar-auto-hide="false"
    >
      <div
        v-for="i in 50"
        :key="i"
        class="
          border-r
          last:border-r-0
          min-w-max
          px-4
          py-2
          h-10
          mx-1
          bg-gray-800
          text-white
          rounded
          hover:opacity-75
        "
      >
        {{ i }}. Btn
      </div>
    </simplebar>
    <h3 class="text-xl bg-gray-800 text-white">vertical</h3>
    <simplebar
      class="
        webkit-scrollbar
        vertical-scrollbar
        h-full
        overflow-x-hidden overflow-y-auto
        border
        pb-8
      "
      data-simplebar-auto-hide="false"
      data-simplebar-click-on-track="false"
      data-simplebar-scrollbar-min-size="50"
    >
      <p v-for="i in 50" :key="i" class="border-b last:border-b-0">
        {{ i }}. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deserunt vitae rem iusto necessitatibus accusantium voluptatem eos.
        Velit, quos aut optio voluptatum doloribus eum eaque minus laudantium
        vel pariatur repellendus praesentium.
      </p>
    </simplebar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class WebkitScrollbar extends Vue {}
</script>

<style lang="postcss">
.firefox-scrollbar.horizontal-scrollbar,
.webkit-scrollbar.horizontal-scrollbar {
  & .simplebar-content-wrapper .simplebar-content {
    @apply flex flex-nowrap;
    @apply -mx-1;
  }
}
</style>
