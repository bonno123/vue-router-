<template>
  <div>
    <product-page />
    <hr />
    <cart-page />
  </div>
</template>

<script>
import ProductPage from "@/components/ProductPage.vue";
import CartPage from "@/components/CartPage.vue";

export default {
  components: { ProductPage, CartPage },
};
</script>
