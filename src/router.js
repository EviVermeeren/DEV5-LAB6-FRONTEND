// router.js
import { createRouter, createWebHistory } from "vue-router";
import ScoreBoard from "./components/ScoreBoard.vue";
import ScoreUpdater from "./components/ScoreUpdater.vue";

const routes = [
  { path: "/", component: ScoreBoard },
  { path: "/ScoreUpdater", component: ScoreUpdater },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
