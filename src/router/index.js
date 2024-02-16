import { createRouter, createWebHistory } from "vue-router";
import Resume from "../components/Resume.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    
  
  ],
});

export default router;
