<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template> 
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 定义一个状态，让自定义事件只发送一次
      isImgLoad: false,
    };
  },
  methods: {
    imgLoad() {
      if (!this.isImgLoad) {
        this.$emit("imgLoad");
        this.isImgLoad = true;
      }
    },
  },
};
</script>
<style scoped>
</style>