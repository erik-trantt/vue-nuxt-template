<template>
  <section class="w-full relative h-[50vh]">
    <div ref="container" class="swiper-container">
      <div class="swiper-wrapper">
        <button
          v-for="(num, index) in swiperData"
          :key="index"
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
          @click="setResult(num.toString())"
        >
          Button {{ num }}
        </button>
      </div>
    </div>

    <!-- If we need navigation buttons -->
    <div
      ref="prevBtn"
      class="swiper-button-prev w-1/6"
      @click.self="slidePrev"
    ></div>
    <div
      ref="nextBtn"
      class="swiper-button-next w-1/6"
      @click.self="slideNext"
    ></div>

    <div class="my-8">
      Result -- Button <span class="font-bold">{{ result }}</span> clicked!
    </div>

    <div ref="diagnosis" class="text-left h-[25vh] w-64 mx-auto"></div>
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

  @Ref()
  readonly diagnosis!: HTMLDivElement;

  readonly SLIDES_PER_VIEW = 3;

  shownIndex: number | null = null;

  swiper!: Swiper;

  result: string | null = "null";

  data = [1, 2, 3, 4, 5, 6, 7, 8];

  swiperData = [this.data[this.data.length - 1], ...this.data, this.data[0]];

  mounted(): void {
    this.swiper = new Swiper(this.container, {
      speed: 300,
      navigation: true,
      spaceBetween: 16,
      slidesPerView: this.SLIDES_PER_VIEW,
      // freeMode: true,
      // freeModeSticky: true,
    });

    this.swiper.activeIndex = 1;
    this.swiper.slideReset();

    this.swiper.on("touchEnd", (swiper, _ev) => {
      const TOLERANCE = 5;

      if (_ev.target === this.prevBtn || _ev.target === this.nextBtn) {
        return;
      }

      if (this.isBeginning && swiper.touches.diff >= TOLERANCE) {
        setTimeout(() => {
          this.slideToLast();
        }, 100);
      } else if (this.isEnd && swiper.touches.diff <= -TOLERANCE) {
        setTimeout(() => {
          this.slideToFirst();
        }, 100);
      }

      // this.displayDiagnosis();
    });

    this.swiper.on("slideChange", () => {
      this.displayDiagnosis();
      this.shownIndex = this.swiper.realIndex;
    });
  }

  get isEnd(): boolean {
    return (
      this.shownIndex === this.swiperData.length - this.SLIDES_PER_VIEW - 1 ||
      this.swiper.isEnd
    );
  }

  get isBeginning(): boolean {
    return this.shownIndex === 1 || this.swiper.isBeginning;
  }

  slideNext(): void {
    // console.log("slideNext", this.isEnd);

    if (this.isEnd) {
      this.slideToFirst();
    } else {
      this.swiper.slideNext();
    }
  }

  slidePrev(): void {
    // console.log("slidePrev", this.isBeginning);

    if (this.isBeginning) {
      this.slideToLast();
    } else {
      this.swiper.slidePrev();
    }
  }

  slideToFirst(): void {
    this.swiper.slideToLoop(1, 500);
  }

  slideToLast(): void {
    this.swiper.slideToLoop(this.data.length - 2, 500);
  }

  setResult(text: string): void {
    this.result = text;
  }

  displayDiagnosis(): void {
    if (!this.diagnosis) {
      return;
    }

    this.diagnosis.innerHTML = `
        this.swiperData.length ${this.swiperData.length} <br />
        swiper.isBeginning ${this.swiper.isBeginning} <br />
        isBeginning ${this.isBeginning} <br />
        swiper.isEnd ${this.swiper.isEnd} <br />
        isEnd ${this.isEnd} <br />
        swiper.realIndex ${this.swiper.realIndex} <br />
      `;
  }
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  @apply w-2/3;
}
</style>
