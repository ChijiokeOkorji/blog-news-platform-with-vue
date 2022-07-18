import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import BlogListingView from "../views/BlogListingView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/AboutView.vue"),
//     },
//   ],
// });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Blog Listing View",
      component: BlogListingView,
    },
    {
      path: "/post-details",
      name: "Post Details",
      component: () => import("../views/PostDetailsView.vue"),
    },
  ],
});

export default router;
