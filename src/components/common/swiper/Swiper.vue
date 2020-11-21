<template>
  <div id="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>

    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{ active: index === currentIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    animDuration: {
      type: Number,
      default: 0.3,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, // 图片个数
      totalWidth: 0, // swiper宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 计数器
      scrolling: false, // 是否在滚动
      observer: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
    }, 1000);
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      clearInterval(this.playTimer);
    },
    // 滚动到正确位置
    scrollContent(position) {
      this.scrolling = true;

      this.swiperStyle.transition = `all ${this.animDuration}s`;
      this.setTransform(position);
      this.checkPosition();

      this.scrolling = false;
    },

    // 检验正确位置
    checkPosition() {
      let swiperEl = document.querySelector(".swiper");
      if (swiperEl != undefined) {
        if (this.totalWidth != swiperEl.offsetWidth) {
          this.totalWidth = swiperEl.offsetWidth;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }
      window.setTimeout(() => {
        if (this.currentIndex >= this.slideCount + 1) {
          // this.swiperStyle.transition = "none";
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = 4;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.animDuration);
    },

    // 设置滚动位置
    setTransform(position) {
      position = position / 100;
      this.swiperStyle.transform = `translateX(${position}rem)`;
    },

    // 添加元素
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slides = swiperEl.querySelectorAll(".slide");

      this.slideCount = slides.length;

      if (this.slideCount > 1) {
        let slideFirst = slides[0].cloneNode(true);
        let slideLast = slides[slides.length - 1].cloneNode(true);
        swiperEl.insertBefore(slideLast, slides[0]);
        swiperEl.appendChild(slideFirst);

        // 让宽度 = 当前轮播图宽度
        this.totalWidth = swiperEl.offsetWidth;
        // 将 swiperStyle 对象地址变为轮播图标签的样式地址
        this.swiperStyle = swiperEl.style;
      }
      this.setTransform(-this.currentIndex * this.totalWidth);
    },
    touchStart(e) {
      if (this.scrolling) return;

      this.swiperStyle.transition = "all 0.05s";

      this.stopTimer(this.playTimer);

      this.touchS = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.touchS;
      this.setTransform(this.distance + -this.currentIndex * this.totalWidth);
    },
    touchEnd(e) {
      this.distanceAbs = Math.abs(this.distance);
      if (this.distance === 0) return;
      else if (
        this.distance > 0 &&
        this.distanceAbs >= this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        this.distanceAbs >= this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
  },
};
</script>
<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0.08rem;
}

.indi-item {
  box-sizing: border-box;
  width: 0.08rem;
  height: 0.08rem;
  border-radius: 0.04rem;
  background-color: #fff;
  line-height: 0.08rem;
  text-align: center;
  font-size: 0.12rem;
  margin: 0 0.05rem;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>