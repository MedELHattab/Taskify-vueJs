import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { userAuthStore } from "../stores/auth";

const router = createRouter({
  routes,
  history: createWebHistory(),
  // linkActiveClass: "active",
});

router.beforeEach(async (to, from, next) => {
  const store = userAuthStore();
  // await store.fetchUser();
  if (to.meta.auth) {
    if (!localStorage.getItem("token")) {
      next("/") // Redirect to home if not authenticated
    } else {
      next(); // Proceed with the navigation
    }
  } else {
    next(); // Proceed with the navigation for routes that don't require authentication
  }
});

export default router;
