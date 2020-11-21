import Vue from "vue";
import Router from "vue-router";

// 安装插件
Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("views/home/Home")
  },
  {
    path: "/category",
    component: () => import("views/category/Category")
  },
  {
    path: "/shopcart",
    component: () => import("views/shopcart/Shopcart")
  },
  {
    path: "/profile",
    component: () => import("views/profile/Profile")
  },
  {
    path: "/detail/:iid",
    component: () => import("views/detail/Detail")
  }
];

// 创建 router 实例
const router = new Router({
  routes,
  mode: "history"
});

export default router;
