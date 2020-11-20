<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template> 

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";

BScroll.use(PullUp);

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      position: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 初始化better-scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滑动事件， 传滑动距离给父组件
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.position = position;
        this.$emit("scrollPosition", position);
      });
    }
    // 监听上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 滚动到指定位置
    scrollTo(x, y, time = 400) {
      this.scroll && this.scrollTo && this.scroll.scrollTo(x, y, time);
    },

    // 再次上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },

    // 刷新 better-scroll
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },

    // 获取到滚动区域 Y 轴位置
    getScrollY() {
      return this.scroll ? this.position.y : 0;
    },
  },
};
</script>
<style scoped>
</style>