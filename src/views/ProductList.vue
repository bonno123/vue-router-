<template>
  <i18n-comp />
  <div>
    <product-page />
    <hr />
    <cart-page />
  </div>
</template>

<script>
import ProductPage from "@/components/ProductPage.vue";
import CartPage from "@/components/CartPage.vue";
import I18nComp from "@/components/I18nComp.vue";

export default {
  components: { ProductPage, CartPage, I18nComp },
};
</script>
