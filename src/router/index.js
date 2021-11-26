import Vue, { h } from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const Layout = {
  render(h) {
    return h("router-view");
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home/123",
    component: Layout,
    children: [
      {
        path: "home/:id?",
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
