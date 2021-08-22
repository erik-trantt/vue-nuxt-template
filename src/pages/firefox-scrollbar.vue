<!--
For Firefox browser.
-->

<template>
  <div class="flex flex-col w-full h-screen">
    <h1 class="text-4xl">Different scrollbars</h1>
    <h3 class="text-xl">horizontal</h3>
    <simplebar
      class="
        firefox-scrollbar
        horizontal-scrollbar
        border
        overflow-x-auto overflow-y-hidden
      "
      style="min-height: 54px"
      :options="{ autoHide: false }"
    >
      <a
        v-for="i in 50"
        :key="i"
        class="high-level-ctas"
        :class="[
          'min-w-max h-10',
          'px-4 py-2 mx-1',
          'border-r last:border-r-0 rounded',
          'bg-gray-800 text-white',
          'hover:opacity-75',
        ]"
        href="#"
      >
        {{ i + 100 }}. Btn
      </a>
    </simplebar>
    <h3 class="text-white text-xl bg-gray-800">vertical</h3>
    <simplebar
      class="
        firefox-scrollbar
        vertical-scrollbar
        pb-8
        h-full
        border
        overflow-x-hidden overflow-y-auto
      "
      :options="{ autoHide: false }"
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
export default class FirefoxScrollbar extends Vue {}
</script>

<style lang="postcss">
.firefox-scrollbar.horizontal-scrollbar,
.webkit-scrollbar.horizontal-scrollbar {
  & .simplebar-content-wrapper .simplebar-content {
    @apply flex flex-nowrap;
    @apply -mx-1;
  }
  /* @apply pb-2 !important; */
}

body {
  @apply overscroll-x-none;
}
</style>
