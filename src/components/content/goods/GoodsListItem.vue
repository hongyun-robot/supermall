<template>
  <div class="item">
    <img :src="goodsListItem['show'].img" @load="imgLoad" />
    <div class="info">
      <p>{{ goodsListItem.title }}</p>
      <span class="first">￥{{ goodsListItem.price }}</span>
      <span>{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template> 
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    // 解决滚动区域无法滚动BUG--1.监听图片是否加载完成并发送事件
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
  },
};
</script>
<style scoped>
.item {
  width: 47%;
  margin-bottom: 0.06rem;
}

.item img {
  width: 100%;
  border-radius: 5%;
}

.info {
  text-align: center;
}

.info p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.first {
  color: #ff7991;
}

.first + span {
  margin-left: 0.2rem;
  position: relative;
}

.first + span::before {
  position: absolute;
  left: -0.13rem;
  top: 0.01rem;
  content: "";
  width: 0.14rem;
  height: 0.14rem;
  background: url("~assets/image/home/收 藏.png") 0 0/14px 14px;
}
</style>