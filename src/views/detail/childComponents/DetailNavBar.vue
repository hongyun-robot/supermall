<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="backCilck">
        <img src="~assets/image/detail/back.png" />
      </div>
      <div class="center" slot="center">
        <span
          v-for="(item, index) of titles"
          :key="item"
          @click="titleClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </span>
      </div>
    </nav-bar>
  </div>
</template> 
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "评价"],
      currentIndex: 0,
    };
  },
  methods: {
    backCilck() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.back img {
  width: 27px;
}

.center {
  display: flex;
}

.center span {
  flex: 1;
}

.active {
  color: rgb(255, 43, 43);
}
</style>