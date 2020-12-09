<template>
  <div class="item" @click="itemClick">
    <img :src="showImage" @load="imgLoad" />
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
  computed: {
    showImage() {
      return this.goodsListItem.image || this.goodsListItem["show"].img;
    },
  },
  methods: {
    // 解决滚动区域无法滚动BUG--1.监听图片是否加载完成并发送事件
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsListItem.iid);
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
  background: url("~assets/image/home/收 藏.png") 0 0/0.14rem 0.14rem;
}
</style>