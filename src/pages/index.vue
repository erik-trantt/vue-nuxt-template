<template>
  <section class="mx-auto w-3/4 h-screen">
    <div>hello world {{ timestamp }}</div>
    <n-link to="/another" class="block">
      click here to visit another page
    </n-link>
    <div class="parent flex w-full h-full bg-black">
      <div class="item-h h-3/4 bg-green-400" style="width: 30%">a</div>
      <div class="item-h parent h-3/4 bg-yellow-400" style="width: 70%">
        <div
          class="item-v bg-green-700 bg-opacity-25"
          style="height: 50%; width: 100%"
        >
          {{ $mq }}
        </div>
        <div
          class="item-v bg-green-900 bg-opacity-25"
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
