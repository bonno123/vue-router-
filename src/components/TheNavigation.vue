<template>
  <div id="nav">
    <router-link id="logo" to="/">Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>
<script>
import src_data from "@/data.json";

export default {
  data() {
    return {
      destinations: src_data.destinations,
    };
  },
};
</script>

<style>
#nav .vue-school-active-link {
  color: rgb(255, 255, 255);
  border-bottom: 1px solid;
}
</style>
