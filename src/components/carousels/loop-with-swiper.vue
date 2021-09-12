<template>
  <section class="w-full relative">
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
      ref="prevButton"
      class="swiper-button-prev w-1/6"
      @click.self="slidePrev"
    ></div>
    <div
      ref="nextButton"
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
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import { Swiper } from "swiper";

@Component
export default class SwiperLoop extends Vue {
  @Prop({ type: Array, default: [] })
  readonly data!: (string | number | HTMLElement)[];

  @Ref()
  readonly container!: HTMLDivElement;

  @Ref()
  readonly nextButton!: HTMLDivElement;

  @Ref()
  readonly prevButton!: HTMLDivElement;

  @Ref()
  readonly diagnosis!: HTMLDivElement;

  swiper!: Swiper;

  shownIndex: number | null = null;

  result: string | null = "null";

  get swiperData(): (string | number | HTMLElement)[] {
    return this.data;
  }

  mounted(): void {
    this.swiper = new Swiper(this.container, {
      speed: 300,
      loop: true,
      navigation: true,
      spaceBetween: 16,
      slidesPerView: 3,
      freeMode: true,
      freeModeSticky: true,
      breakpoints: {
        400: {
          slidesPerView: 4,
        },
      },
    });

    this.swiper.on("slideChange", () => {
      this.shownIndex = this.swiper.realIndex;
    });
  }

  slideNext(): void {
    // console.log("slideNext", this.isEnd);

    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  slidePrev(): void {
    // console.log("slidePrev", this.isBeginning);

    if (this.swiper) {
      this.swiper.slidePrev();
    }
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
        swiper.isEnd ${this.swiper.isEnd} <br />
        swiper.realIndex ${this.swiper.realIndex} <br />
        swiper.params.slidesPerView ${this.swiper.params.slidesPerView} <br />
      `;
  }
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  @apply w-2/3;
}
</style>
