import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import ProductList from "@/views/ProductList.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
  { path: "/productlist", name: "ProductList", component: ProductList },
  { path: "/shoppingcart", name: "ShoppingCart", component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vue-school-active-link",
});

export default router;
