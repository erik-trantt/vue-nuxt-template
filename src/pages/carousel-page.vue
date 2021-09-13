<template>
  <div class="w-full">
    <div class="h-[74vh] py-4 border-b border-black">
      <h2 class="text-xl">Swiper with fake loop</h2>
      <swiper-loop-with-js
        :data="data"
        :append-number="4"
        :prepend-number="4"
        :offset-left="3"
        :offset-right="3"
      ></swiper-loop-with-js>
    </div>

    <div class="h-[24vh] py-4">
      <h2 class="text-xl">Swiper with loop on</h2>
      <swiper-loop :data="data"></swiper-loop>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SwiperLoopWithJs from "~/components/carousels/loop-with-js.vue";
import SwiperLoop from "~/components/carousels/loop-with-swiper.vue";

@Component({ components: { SwiperLoopWithJs, SwiperLoop } })
export default class CarouselPage extends Vue {
  data = [1, 2, 3, 4, 5, 6, 7, 8];
}
</script>
