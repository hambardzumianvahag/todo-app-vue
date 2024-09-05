import { createRouter, createWebHashHistory } from "vue-router";

import mainView from "../view/MainView.vue";
import addTodoView from "../view/AddTodoView.vue";
import EditView from "../view/EditView.vue";

const routes = [
  { path: "/", component: mainView },
  {
    path: "/add",
    component: addTodoView,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
