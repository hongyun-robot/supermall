<template>
  <swiper class="datailSwiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template> 
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.datailSwiper {
  height: 3rem;
}
</style>