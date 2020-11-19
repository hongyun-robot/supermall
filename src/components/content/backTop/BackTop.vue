<template>
  <div class="backTop">
    <img src="~assets/image/home/TOP.png" alt="点击返回最上面" />
  </div>
</template> 
<script>
export default {
  name: "BackTop",
};
</script>
<style scoped>
.backTop {
  background-color: rgba(225, 225, 225, 0.65);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: fixed;
  right: 0.25rem;
  bottom: 0.7rem;
  text-align: center;
  line-height: 31px;
  border: 1px solid #ccc;
}

.backTop img {
  width: 0.3rem;
}
</style>