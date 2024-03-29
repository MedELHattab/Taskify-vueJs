import TaskPage from "../pages/TaskPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotFoundErrorPage from "../pages/NotFoundErrorPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/tasks",
    component: TaskPage,
    name: "tasks",
    meta: {
      auth: true,
    },
  },
  
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
    meta: {
      guest: true,
    },
  },
  {
    path: "/:notFound(.*)",
    name: "error.404",
    component: NotFoundErrorPage,
  },
];

export default routes;
