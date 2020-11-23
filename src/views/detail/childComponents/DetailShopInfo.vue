<template>
  <div class="shop_info">
    <div class="shop_top">
      <a :href="shop.allGoodsUrl">
        <img :src="shop.shopLogo" />
        <span>{{ shop.name }}</span>
      </a>
    </div>
    <div class="shop_middle">
      <div class="shop_middle_left">
        <div class="info_sells">
          <p>{{ totalSell() }}</p>
          <p>总销量</p>
        </div>
        <div class="info_goods">
          <p>{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop_middle_right">
        <div v-for="(item, index) in shop.score" :key="index">
          <span>{{ item.name }}：</span>
          <span :class="{ better: item.isBetter }" class="score">{{
            item.score
          }}</span>
          <span :class="{ betterE: item.isBetter }" class="scoreE">{{
            evaluation(item.score)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    totalSell() {
      // 对总销量进行转变， 结果四舍五入保留一位小数
      return (this.shop.cSells / 10000).toFixed(1) + "万";
    },
    evaluation(score) {
      if (score <= 4.8) return "低";
      else return "高";
    },
  },
};
</script>
<style scoped>
.shop_info {
  padding: 0 0.1rem;
}

.shop_top {
  margin: 0.3rem 0px;
}

.shop_top img {
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 0.45rem;
}

.shop_top span {
  margin-left: 0.15rem;
  font-size: 0.16rem;
}

.shop_middle {
  display: flex;
}

.shop_middle > div {
  flex: 1;
}

.shop_middle_left {
  display: flex;
  justify-content: space-around;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.shop_middle_left p:first-child {
  font-size: 20px;
  text-align: center;
  padding-bottom: 5px;
}

.shop_middle_left p:last-child {
  text-align: center;
  font-size: 12px;
}

.info_sells,
.info_goods,
.shop_middle_right {
  /* padding-top: 3px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shop_middle_right div {
  display: flex;
  justify-content: space-around;
}

.score {
  color: #5ea732;
}

.better {
  color: #f13e3a;
}

.scoreE {
  background-color: #5ea732;
}

.betterE {
  background-color: #f13e3a;
}

.shop_middle_right span:last-child {
  color: #fff;
}
</style>