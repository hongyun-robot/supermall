<template>
  <div v-if="detailInfo.detailImage">
    <div class="goods_info">
      <p>{{ detailInfo.desc }}</p>
      <p>
        {{ detailInfo.detailImage[0].key }}
      </p>
    </div>
    <div class="goods_images">
      <img
        :src="item"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template> 
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isImageLoad: false,
      count: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.count == this.detailInfo.detailImage[0].list.length) {
        this.$emit("imgLoad");
      }
    },
  },
};
</script>
<style scoped>
.goods_images img {
  width: 100%;
  border-bottom: 5px solid rgba(0, 0, 0, 0.2);
}
</style>