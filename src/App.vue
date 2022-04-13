<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import sourceData from '@/data.json'
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<template>
  <div>
    <the-navigation />
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<style></style>
