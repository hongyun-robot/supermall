<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <!-- scroll 内 tabControl 的替换品 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      class="opacity"
      :class="{ tab_control: isShowTabControl }"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="scrollEvent"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imgLoad="imgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
      />
      <goods-list :goods-list="showGoods" />
    </scroll>
    <back-top
      class="backTop"
      @click.native="backClick"
      v-show="isShowBackTop"
    />
  </div>
</template> 

<script>
// 私有的组件
import HomeSwiper from "./child/HomeSwiper";
import RecommendView from "./child/RecommendView";
import FeatureView from "./child/FeatureView";

// 公共的组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/untils";
import { itemImageLoad } from "common/mixins";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false, // 是否显示返回顶部的状态
      tabControlOffsetTop: 0, // 将 tabControl 的 offsetTop 数据保存下来
      isShowTabControl: false, // 是否将 tabControl 替换组件显示出来的状态
      saveScrollY: 0, // 改变页面保存当前位置
    };
  },
  mixins: [itemImageLoad],
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    BackTop,
    Scroll,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 保存切换前滚动区域的 Y 轴位置
  deactivated() {
    this.saveScrollY = this.$refs.scroll.getScrollY();

    this.$bus.$off("imgLoad", this.imgListener);
  },
  // 切换回来自动滚动到切换前位置，并进行刷新
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveScrollY, 500);
    this.$refs.scroll.refresh();
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // scroll
    scrollEvent(position) {
      // 1. 判断返回顶部组件是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2. 是否显示 scroll 外面的 tabControl
      this.isShowTabControl = -position.y > this.tabControlOffsetTop;
    },

    imgLoad() {
      // 将数据保存下来
      this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求首页展示数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home_nav {
  font-size: var(--font-size);
  background-color: var(--color-tint);
  color: #fff;
}

/* 做个过渡效果 */
.opacity {
  opacity: 0;
  transition: all 0.5s;
}

.tab_control {
  opacity: 1;
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 0.44rem;
  bottom: 0.49rem;
  left: 0;
  right: 0;
  overflow: hidden;
}

.backTop {
  transition: all 1s;
}
</style>