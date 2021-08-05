<template>
  <section class="h-screen w-3/4 mx-auto">
    <div
      class="transition-transform transform cursor-pointer"
      :class="{
        'translate-x-4': clicked,
      }"
      @click="clicked = !clicked"
    >
      hello world {{ timestamp }} {{ clicked }}
    </div>
    <nuxt-link
      to="/content-builder"
      class="text-blue-500 underline hover:no-underline"
      >visit content builder</nuxt-link
    >
    <div class="h-full w-full bg-black flex parent">
      <div class="item-h bg-green-400 h-3/4" style="width: 30%">a</div>
      <div class="item-h bg-yellow-400 h-3/4 parent" style="width: 70%">
        <div
          class="item-v bg-green-700 bg-opacity-50"
          style="height: 50%; width: 100%"
        >
          {{ $mq }}
        </div>
        <div
          class="item-v bg-green-900 bg-opacity-50"
          style="height: 50%; width: 100%"
        >
          {{ $mq | mq({ sm: 1, md: 2, lg: "3++" }) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* eslint-disable-next-line */
@Component({
  components: {},
})
export default class Layout extends Vue {
  timestamp = Date.now();

  clicked = false;

  get newTimestamp(): number {
    return Date.now();
  }
}
</script>
<style lang="postcss" scoped>
/* .item-h + .item-h {
  @apply pl-4;
}

.item-v + .item-v {
  @apply pt-4;
} */
</style>
