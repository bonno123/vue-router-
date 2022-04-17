<template>
  <h2>Cart Items</h2>
  <ul>
    <li v-for="item in cartItems">
      {{ item.title }}-{{ item.price }}-{{ item.quantity }}
    </li>
  </ul>
  <p>total: {{ total }}</p>
  <button @click="$store.dispatch('checkout')">checkout</button>
  <p v-if="$store.state.checkoutStatus">{{ $store.state.checkoutStatus }}</p>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>
