<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template> 
<script>
import DetailNavBar from "./childComponents/DetailNavBar";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  data() {
    return {
      iid: "",
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>
<style scoped>
</style>