import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/areas",
    name: "areas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "area" */ "../views/AreaListar.vue"),
  },
  {
    path: "/areas/:id",
    name: "areaUpdate",
    component: () => import(/* webpackChunkName: "areaUpdate" */ "../views/AreaUpdate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
