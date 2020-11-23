<template>
  <div class="detail_base_info">
    <div class="goodsHd">
      <p class="goodsTitle">{{ detailGoods.title }}</p>
      <div class="goodsPrice">
        <span class="price">{{ detailGoods.price }}</span>
        <div class="oldPrice">
          {{ detailGoods.oldPrice }}
          <div
            class="desc"
            :style="{ backgroundColor: detailGoods.discountBgColor }"
          >
            {{ detailGoods.discountDesc }}
          </div>
        </div>
      </div>
      <div class="goodsOther">
        <span v-for="(item, index) in detailGoods.columns" :key="index">{{
          item
        }}</span>
      </div>
      <ul class="ul_goodsServers">
        <li
          class="goodsServers"
          v-for="(item, index) in detailGoods.services"
          :key="index"
          v-show="index != detailGoods.services.length - 1"
        >
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
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
    this.detailGoods.columns.forEach((element, index) => {
      index == 2
        ? (this.detailGoods.columns[index] = this.detailGoods.services[
            this.detailGoods.services.length - 1
          ].name)
        : undefined;
    });
  },
};
</script>
<style scoped>
.detail_base_info {
  border-bottom: 5px solid #f2f5f8;
}

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
  display: flex;
}

.price {
  font-size: 0.24rem;
  color: rgb(247, 96, 121);
}

.oldPrice {
  position: relative;
  margin-left: 0.05rem;
  font-size: 0.12rem;
  color: #aaa;
  height: 100%;
  width: 100%;
  margin-top: 10px;
}

.desc {
  font-size: 0.11rem;
  border-radius: 9px;
  padding: 2px 5px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: -0.12rem;
  left: 0.43rem;
}

.goodsOther {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  color: #888;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.1rem;
  font-size: 12px;
}

.ul_goodsServers {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
}

.goodsServers img {
  width: 0.14rem;
}
</style>