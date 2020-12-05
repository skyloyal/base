import { createRouter, createWebHistory } from "vue-router";
// vue初始home页面
import Login from "../views/Login/index.vue"
const routes = [
  //vue初始导游范例
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
