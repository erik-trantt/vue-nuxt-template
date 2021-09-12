<template>
  <div class="w-full">
    <swiper-loop-with-js
      :data="data"
      :append-number="3"
      :prepend-number="3"
      :offset-left="3"
      :offset-right="3"
      class="h-[50vh] py-4"
    ></swiper-loop-with-js>

    <swiper-loop :data="data" class="h-[50vh] py-4"></swiper-loop>
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
