<template>
  <section class="mx-auto h-screen w-2/3">
    <div ref="swiperContainer" class="swiper-container">
      <ul class="swiper-wrapper">
        <li
          v-for="i in 10"
          :key="'bullet-' + i"
          class="swiper-slide font-bold text-white"
          style="background-color: purple"
        >
          {{ i }}
        </li>
      </ul>
    </div>

    <div ref="paginationContainer" class="swiper-pagination"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import { Swiper, Pagination } from "swiper";
import type { SwiperOptions } from "swiper";

Swiper.use([Pagination]);

/* eslint-disable-next-line */
@Component({
  components: {},
})
export default class CarouselWithPagination extends Vue {
  @Ref()
  swiperContainer!: HTMLDivElement;

  @Ref()
  paginationContainer!: HTMLUListElement;

  swiper!: Swiper;

  swiperOptions: SwiperOptions = this.prepareOptions();

  prepareOptions(): SwiperOptions {
    return {
      // loop: true,
      pagination: {
        el: this.paginationContainer,
        type: "bullets",
        dynamicBullets: true,
        clickable: true,
      },
      slidesPerView: 4,
      speed: 300,
      spaceBetween: 24,
    };
  }

  mounted(): void {
    console.log(this.swiperOptions);
    this.swiper = new Swiper(this.swiperContainer, {
      loop: true,
      pagination: {
        el: this.paginationContainer,
        type: "bullets",
        dynamicBullets: true,
        clickable: true,
      },
      slidesPerView: 4,
      speed: 300,
      spaceBetween: 24,
    });
  }
}
</script>
