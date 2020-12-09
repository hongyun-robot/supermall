import { debounce } from "./untils";

export const itemImageLoad = {
  data() {
    return {
      imgListener: null
    };
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 100);

    this.imgListener = () => {
      refresh();
    };

    this.$bus.$on("imgLoad", this.imgListener);
  }
};
