import { createRouter, createWebHistory } from "vue-router";
import index from "/src/pages/index.vue";
import login from "/src/pages/login.vue";
import exploreVue from "../pages/explore.vue";
const routes = [
  {
    path: "/",
    name: index,
    component: index,
  },
  {
    path: "/login/",
    name: login,
    component: login,
  },
  {
    path: "/explore/",
    name: login,
    component: exploreVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
