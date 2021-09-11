<template>
  <section class="w-full">
    <div ref="container" class="swiper-container">
      <div class="swiper-wrapper">
        <button
          v-for="i in data"
          :key="i"
          type="button"
          class="
            swiper-slide
            rounded
            bg-black
            text-white
            font-bold
            uppercase
            p-3
            w-1/6
          "
          @click="setResult(i.toString())"
        >
          Button {{ i }}
        </button>
      </div>
    </div>

    <!-- If we need navigation buttons -->
    <div
      ref="prevBtn"
      class="swiper-button-prev w-1/6"
      @click.stop="slidePrev"
    ></div>
    <div
      ref="nextBtn"
      class="swiper-button-next w-1/6"
      @click.stop="slideNext"
    ></div>

    <div class="my-8">
      Result -- Button <span class="font-bold">{{ result }}</span> clicked!
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import { Swiper } from "swiper";

@Component
export default class SwiperPage extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;

  @Ref()
  readonly nextBtn!: HTMLDivElement;

  @Ref()
  readonly prevBtn!: HTMLDivElement;

  swiper!: Swiper;

  result: string | null = "null";

  data = [1, 2, 3, 4, 5, 6, 7, 8];

  // swiperData = [this.data[this.data.length - 1], ...this.data, this.data[0]];

  swiperTouchStartX: number | null = null;

  mounted(): void {
    this.swiper = new Swiper(this.container, {
      speed: 300,
      navigation: true,
      spaceBetween: 16,
      slidesPerView: 3,
      // freeMode: true,
      // freeModeSticky: true,
    });

    this.swiper.on("touchEnd", (swiper, _ev) => {
      const TOLERANCE = 100;
      // console.log(_ev);

      if (_ev.target === this.prevBtn || _ev.target === this.nextBtn) {
        return;
      }

      if (swiper.isBeginning && swiper.touches.diff >= TOLERANCE) {
        setTimeout(() => {
          this.slideToLast();
        }, 100);
      } else if (swiper.isEnd && swiper.touches.diff <= -TOLERANCE) {
        setTimeout(() => {
          this.slideToFirst();
        }, 100);
      }
    });

    // console.log(this.swiper);
  }

  slideNext(): void {
    if (this.swiper.isEnd) {
      // console.log("slideNext", "isEnd", this.swiper.isEnd);
      this.slideToFirst();
    } else {
      // console.log("go next");
      this.swiper.slideNext();
    }
    // this.swiper.slideNext();
  }

  slidePrev(): void {
    if (this.swiper.isBeginning) {
      // console.log("slidePrev", "isBeginning", this.swiper.isBeginning);
      this.slideToLast();
    } else {
      // console.log("go prev");
      this.swiper.slidePrev();
    }
    // this.swiper.slidePrev();
  }

  slideToFirst(): void {
    this.swiper.slideToLoop(0, 500);
  }

  slideToLast(): void {
    this.swiper.slideToLoop(this.data.length - 1, 500);
  }

  setResult(text: string): void {
    this.result = text;
  }
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  @apply w-2/3;
}
</style>
