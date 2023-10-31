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
      import(/* webpackChunkName: "area" */ "../views/areas/AreaListar.vue"),
  },
  {
    path: "/areas/:id",
    name: "areaUpdate",
    component: () => import(/* webpackChunkName: "areaUpdate" */ "../views/areas/AreaUpdate.vue"),
  },
  {
    path: "/activos",
    name: 'activos',
    component: ()=> import( /*  */ "../views/activos/ActivoListar.vue")
  },
  {
    path: "/activos/crear",
    name: 'activos-nuevo',
    component: ()=> import( /*  */ "../views/activos/ActivoCrear.vue")
  },
  {
    path: "/activos/editar/:id",
    name: 'activos-editar',
    component: ()=> import( /*  */ "../views/activos/ActivoUpdate.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
