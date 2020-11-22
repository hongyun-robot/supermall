<template>
  <div>
    <div class="goodsHd">
      <p class="goodsTitle">{{ detailGoods.title }}</p>
      <div class="goodsPrice">
        <span class="price">{{ detailGoods.price }}</span>
        <s class="oldPrice">{{ detailGoods.oldPrice }}</s>
        <div class="desc">{{ detailGoods.discountDesc }}</div>
      </div>
      <div class="goodsOther">
        <span v-for="(item, index) in detailGoods.columns" :key="index">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    detailGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  beforeUpdate() {
    // this.detailGoods.columns.forEach((element, index) => {
    //   index == 2
    //     ? (this.detailGoods.columns[index] = this.detailGoods.services[
    //         this.detailGoods.services.length - 1
    //       ].name)
    //     : undefined;
    // });
    console.log(this.detailGoods.services);
  },
};
</script>
<style scoped>
.goodsHd {
  margin: 0.05rem 0.05rem 0;
}

.goodsTitle {
  margin-right: 0.02rem;
  font-size: 0.16rem;
  text-indent: 1.8em;
  line-height: 0.23rem;
  font-weight: 500;
}

.goodsPrice {
  margin-top: 0.1rem;
  position: relative;
}

.price {
  font-size: 0.24rem;
  color: rgb(247, 96, 121);
}

.oldPrice {
  margin-left: 0.05rem;
  font-size: 0.12rem;
  color: #aaa;
}

.desc {
  font-size: 0.11rem;
  background-color: rgb(255, 69, 79);
  border-radius: 9px;
  width: 0.3rem;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0.03rem;
  right: 1.2rem;
}

.goodsOther {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  color: #888;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.1rem;
}
</style>