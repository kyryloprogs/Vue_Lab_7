import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);


function requireEmailVerification(to, from, next) {
  const isAuthenticated = router.app.$checkEmailVerification();
  if (!isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}

const routes: Array<RouteConfig> = [
  {
    path: "/Form",
    name: "TaskForm",
    component: () => import("./views/TaskForm.vue"),
    meta: {
      requiresAuth: true
    },
    beforeEnter: requireEmailVerification
  },
  {
    path: "/",
    name: "TaskList",
    component: () => import("./views/TaskList.vue"),
    meta: {
      requiresAuth: true
    },
    beforeEnter: requireEmailVerification
  },
  {
    path: '/about',
    component: () => import("./views/About.vue"),
    beforeEnter: requireEmailVerification
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;