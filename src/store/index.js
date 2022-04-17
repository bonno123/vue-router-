import { createStore } from "vuex";
import shop from "@/api/shop";

const store = createStore({
  state: {
    products: [],
    cart: [],
    checkoutStatus: null,
  },

  getters: {
    //computed properties
    availableProducts(state, getters) {
      return state.products.filter((product) => product.inventory > 0);
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id == cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    // cartTotal(state, getters) {
    //   let total = 0;
    //   getters.cartProducts.foreach((product) => {
    //     total += product.price * product.quantity;
    //   });
    //   return total;
    // },
  },

  actions: {
    fetchProducts(context) {
      return new Promise((resolve) => {
        // make ajax call
        // run setProduct Mutation
        shop.getProducts((products) => {
          context.commit("setProduct", products);
          resolve();
        });
      });
    },
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(
          (item) => item.id == product.id
        );
        if (!cartItem) {
          //push item to the cart
          context.commit("pushProductToCart", product.id);
        } else {
          //increment quantity
          context.commit("incrementItemQuantity", cartItem);
        }
        context.commit("decrementProductInventory", product);
      }
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "sucsess");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    },
  },

  mutations: {
    setProduct(state, products) {
      //updateProduct
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({ id: productId, quantity: 1 });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export default store;
