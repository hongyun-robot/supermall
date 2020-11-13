<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goods-list-item="item"
    />
  </div>
</template> 
<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default: [],
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.05rem;
}
</style>