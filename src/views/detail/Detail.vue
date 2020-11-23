<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" />
    <detail-base-info :detail-goods="detailGoods" />
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template> 
<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";

import { getDetail, getDetailGoods, getShop } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: "",
      topImages: [],
      detailGoods: {},
      shop: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    this.getDetail(this.iid);
  },
  methods: {
    createObj() {},
    getDetail(iid) {
      getDetail(iid).then((res) => {
        console.log(res);
        const result = res.result;
        this.topImages = result.itemInfo.topImages;

        this.detailGoods = new getDetailGoods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );

        this.shop = new getShop(result.shopInfo);
      });
    },
  },
};
</script>
<style scoped>
</style>