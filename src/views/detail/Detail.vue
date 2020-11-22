<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :detail-goods="detailGoods"></detail-base-info>
  </div>
</template> 
<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";

import { getDetail, getDetailGoods, getShop } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  data() {
    return {
      iid: "",
      topImages: [],
      detailGoods: {},
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

        this.detailGoods = new getDetailGoods(result.itemInfo, result.columns);

        // this.detailGoods = new getShop(result.shopInfo.services);
        // console.log(this.detailGoods.services);
      });
    },
  },
};
</script>
<style scoped>
</style>