<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabControlItem"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template> 
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tabControl {
  display: flex;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  background-color: #fff;
  opacity: 0.8;
}

.tabControlItem {
  flex: 1;
}

.active {
  color: var(--color-height-text);
}

.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 0.03rem;
}
</style>