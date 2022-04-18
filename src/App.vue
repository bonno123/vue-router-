<template>
  <div>
    <the-navigation />
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import I18nComp from "./components/I18nComp.vue";
export default {
  components: { TheNavigation, I18nComp },
};
</script>
