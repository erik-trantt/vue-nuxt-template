<template>
  <section class="h-screen w-3/4 mx-auto">
    <div>hello world {{ timestamp }}</div>
    <div class="h-full w-full bg-black flex parent">
      <div class="item-h bg-green-400 h-3/4" style="width: 30%">a</div>
      <div class="item-h bg-yellow-400 h-3/4 parent" style="width: 70%">
        <div
          class="item-v bg-green-700 bg-opacity-25"
          style="height: 50%; width: 100%"
        >
          b
        </div>
        <div
          class="item-v bg-green-900 bg-opacity-25"
          style="height: 50%; width: 100%"
        >
          c
        </div>
      </div>
    </div>
    <div class="bg-white">asd</div>
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
