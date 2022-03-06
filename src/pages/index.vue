<template>
  <section class="mx-auto flex h-screen w-3/4 flex-col">
    <div>hello world {{ timestamp }}</div>
    <div>
      <nuxt-link to="/carousels" class="underline hover:no-underline">
        All Carousels
      </nuxt-link>
    </div>
    <div class="parent flex w-full flex-1 bg-black">
      <div class="h-3/4 bg-green-400" style="width: 30%">a</div>
      <div class="parent h-3/4 bg-yellow-400" style="width: 70%">
        <div
          class="bg-green-700 bg-opacity-25"
          style="height: 50%; width: 100%"
        >
          {{ $mq }}
        </div>
        <div
          class="bg-green-900 bg-opacity-25"
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
