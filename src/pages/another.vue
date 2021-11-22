<template>
  <section class="mx-auto w-3/4 h-screen">
    <div>hello world {{ timestamp }}</div>
    <div class="parent w-full h-full bg-black">
      <p>this is 2nd page</p>
      <n-link to="/" class="block">click here</n-link> to go back to homepage
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
