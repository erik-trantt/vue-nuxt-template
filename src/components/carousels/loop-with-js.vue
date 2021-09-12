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
// import { last as _last, first as _first } from "lodash";

@Component
export default class SwiperLoopWithJs extends Vue {
  @Prop({ type: Array, default: [] })
  readonly data!: (string | number | HTMLElement)[];

  @Prop({ default: 0 })
  readonly prependNumber!: number;

  @Prop({ default: 0 })
  readonly appendNumber!: number;

  @Prop({ default: 0 })
  readonly offsetLeft!: number;

  @Prop({ default: 0 })
  readonly offsetRight!: number;

  @Ref()
  readonly container!: HTMLDivElement;

  @Ref()
  readonly nextButton!: HTMLDivElement;

  @Ref()
  readonly prevButton!: HTMLDivElement;

  @Ref()
  readonly diagnosis!: HTMLDivElement;

  swiper!: Swiper;

  shownIndex = 0;

  result: string | null = "null";

  get swiperData(): (string | number | HTMLElement)[] {
    const slidesToPrepend =
      isNaN(Number(this.prependNumber)) || this.prependNumber <= 0
        ? []
        : this.data.slice(-this.prependNumber);
    const slidesToAppend =
      isNaN(Number(this.appendNumber)) || this.appendNumber <= 0
        ? []
        : this.data.slice(0, this.appendNumber);

    return [...slidesToPrepend, ...this.data, ...slidesToAppend];
  }

  mounted(): void {
    this.swiper = new Swiper(this.container, {
      speed: 300,
      navigation: true,
      spaceBetween: 16,
      slidesPerView: 3,
      freeMode: true,
      freeModeSticky: true,
      freeModeMomentum: false,
      breakpoints: {
        400: {
          slidesPerView: 4,
        },
      },
    });

    this.swiper.activeIndex = this.prependNumber;
    this.shownIndex = this.prependNumber;
    this.swiper.slideReset();

    this.swiper.on("touchEnd", (swiper, _ev) => {
      const TOLERANCE = 5;

      if (_ev.target === this.prevButton || _ev.target === this.nextButton) {
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

    this.swiper.on("beforeTransitionStart", () => {
      this.displayDiagnosis();
    });

    this.swiper.on("slideChange", () => {
      this.shownIndex = this.swiper.realIndex;
    });

    // console.log(this.swiper);
  }

  get currentSlidesPerView(): number {
    return this.swiper.params.slidesPerView &&
      this.swiper.params.slidesPerView !== "auto"
      ? Number(this.swiper.params.slidesPerView)
      : 0;
  }

  get rightMostIndex(): number {
    return (
      this.swiperData.length -
      this.currentSlidesPerView -
      this.appendNumber +
      this.offsetRight
    );
  }

  get leftMostIndex(): number {
    return this.prependNumber - this.offsetLeft;
  }

  get isEnd(): boolean {
    return this.shownIndex > this.rightMostIndex || this.swiper.isEnd;
  }

  get isBeginning(): boolean {
    return this.shownIndex < this.leftMostIndex || this.swiper.isBeginning;
  }

  slideNext(): void {
    // console.log("slideNext", this.isEnd);
    this.shownIndex += 1;
    if (this.isEnd) {
      this.slideToFirst();
    } else {
      this.swiper.slideNext();
    }
  }

  slidePrev(): void {
    // console.log("slidePrev", this.isBeginning);
    this.shownIndex -= 1;
    if (this.isBeginning) {
      this.slideToLast();
    } else {
      this.swiper.slidePrev();
    }
  }

  slideToFirst(): void {
    this.swiper.slideToLoop(this.leftMostIndex + this.offsetLeft, 0, false);
  }

  slideToLast(): void {
    this.swiper.slideTo(this.rightMostIndex - this.offsetRight, 0, false);
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
        swiper.realIndex ${this.swiper.realIndex} <br />
        shownIndex ${this.shownIndex} <br />
        swiper.isBeginning ${this.swiper.isBeginning} <br />
        isBeginning ${this.isBeginning} <br />
        isBeginning ${this.prependNumber} <br />
        swiper.isEnd ${this.swiper.isEnd} <br />
        isEnd ${this.isEnd} <br />
        isEnd ${
          this.swiperData.length - this.currentSlidesPerView - this.appendNumber
        } <br />
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
