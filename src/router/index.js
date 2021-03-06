import Vue from "vue";
import VueRouter from "vue-router";
import channelList from "../views/channel/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "channelList",
    component: channelList
  },
  {
    path: "/articles",
    name: "articleList",
    component: import("../views/article/List.vue")
  },
  {
    path: "/articles/add",
    name: "articleList-add",
    component: import("../views/article/Add.vue")
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
