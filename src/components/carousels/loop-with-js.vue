<template>
  <section class="w-full h-full relative">
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

    <div class="swiper-pagination w-full h-8"></div>

    <div class="my-8">
      Result -- Button <span class="font-bold">{{ result }}</span> clicked!
    </div>

    <div
      ref="diagnosis"
      class="text-left w-64 h-full mx-auto text-gray-400"
    ></div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import { Swiper, Pagination } from "swiper";

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

  swiperData: (string | number | HTMLElement)[] = (() => {
    const slidesToPrepend =
      isNaN(Number(this.prependNumber)) || this.prependNumber <= 0
        ? []
        : this.data.slice(-this.prependNumber);
    const slidesToAppend =
      isNaN(Number(this.appendNumber)) || this.appendNumber <= 0
        ? []
        : this.data.slice(0, this.appendNumber);

    return [...slidesToPrepend, ...this.data, ...slidesToAppend];
  })();

  mounted(): void {
    Swiper.use([Pagination]);
    this.swiper = new Swiper(this.container, {
      speed: 300,
      navigation: true,
      spaceBetween: 16,
      slidesPerView: 3,
      slidesPerGroup: 1,
      freeMode: true,
      freeModeSticky: true,
      freeModeMomentum: false,
      breakpoints: {
        450: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
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
    return this.isSlidesPerViewNumber(this.swiper.params.slidesPerView)
      ? Number(this.swiper.params.slidesPerView)
      : 1;
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

  get slideScrollWidth(): number {
    const gap = this.swiper.params.spaceBetween
      ? this.swiper.params.spaceBetween
      : 0;

    const slideWidth = this.swiper.slides[0].scrollWidth;

    return slideWidth + gap;
  }

  slideToFirst(): void {
    this.swiper.translateTo(this.swiper.translate - this.slideScrollWidth, 200);

    setTimeout(() => {
      const destination =
        this.leftMostIndex +
        this.offsetLeft +
        Number(this.swiper.params.slidesPerGroup) +
        (this.offsetLeft - this.currentSlidesPerView);

      // console.log(destination);

      this.swiper.slideTo(destination, 0, false);
    }, 150);
  }

  slideToLast(): void {
    this.swiper.translateTo(this.swiper.translate + this.slideScrollWidth, 200);

    setTimeout(() => {
      const destination =
        this.rightMostIndex -
        this.offsetRight -
        Number(this.swiper.params.slidesPerGroup) +
        (this.currentSlidesPerView - this.offsetRight);

      // console.log(destination);

      this.swiper.slideTo(destination, 0, false);
    }, 150);
  }

  isSlidesPerViewNumber(
    slidesPerView: typeof Swiper.defaults.slidesPerView
  ): boolean {
    return Boolean(slidesPerView) && slidesPerView !== "auto";
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
        begin at ${this.leftMostIndex + 1},
        go left to ${this.rightMostIndex - this.offsetRight + 1} <br />
        swiper.isEnd ${this.swiper.isEnd} <br />
        isEnd ${this.isEnd} <br />
        end at ${this.rightMostIndex + 1},
        go right to ${this.leftMostIndex + this.offsetLeft + 1} <br />
        swiper.params.slidesPerView ${this.swiper.params.slidesPerView} <br />
      `;
  }
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  @apply w-2/3;
}
.swiper-pagination {
  position: static;
}
</style>
