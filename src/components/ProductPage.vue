<template>
  <div>
    <h2>product list</h2>
    <img
      v-if="loading"
      src="https://cutewallpaper.org/21/loading-gif-transparent-background/All-Loading-Gif-Image-Transparent-Background-Best-Studio-.gif"
      alt=""
      width="150"
      height="100"
    />
    <ul v-else>
      <li v-for="product in products">
        <span
          >{{ product.title }}- {{ product.price }} -{{
            product.inventory
          }}</span
        >
        <button @click="addProductToCart(product)">add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import shop from "@/api/shop";
// import store from "@/store/index.js";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
  created() {
    this.loading = true;
    // shop.getProducts((products) => {
    //   this.$store.commit("setProduct", products);
    // });
    this.$store.dispatch("fetchProducts").then(() => {
      this.loading = false;
    });
  },
};
</script>
