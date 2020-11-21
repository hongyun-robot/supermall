<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
#app {
  max-width: 750px;
  min-width: 320px;
  font-size: 14px;
}
</style>
