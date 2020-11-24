<template>
  <div id="detail">
    <detail-nav-bar class="bar"></detail-nav-bar>
    <scroll :probe-type="3" class="content" ref="scroll">
      // 轮播图
      <detail-swiper :top-images="topImages" />
      <detail-base-info :detail-goods="detailGoods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-params-info :item-params="itemParams" />
      <comment-info :comment-info="commentInfo" />
      <goods-list-item :goodsListItem="commends" />
    </scroll>
  </div>
</template> 
<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import CommentInfo from "./childComponents/CommentInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsListItem from "components/content/goods/GoodsListItem";

import {
  getDetail,
  getDetailGoods,
  getShop,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    CommentInfo,
    GoodsListItem,
  },
  data() {
    return {
      iid: "",
      topImages: [],
      detailGoods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      commends: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    this.getDetail(this.iid);
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        console.log(res);
        const result = res.result;
        // 轮播图
        this.topImages = result.itemInfo.topImages;

        // 商品价格等信息
        this.detailGoods = new getDetailGoods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );

        // 店铺信息
        this.shop = new getShop(result.shopInfo);

        // 商品图片
        this.detailInfo = result.detailInfo;

        // 商品尺码等
        this.itemParams = result.itemParams;

        this.commentInfo = result.rate;
      });
    },

    getRecommend() {
      getRecommend().then((res) => {
        this.commends = res.data.list;
      });
    },

    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}

.bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>