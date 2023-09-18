<template>
  <div>
    <img :src="img" alt="" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.query.img);
const img = ref(route.query.img);
</script>

<style  scoped>
form {
  text-align: left;
  width: 30%;
  margin: 50px auto;
}
img {
  width: 100px;

  transform: translate(4px, 46px);
}
</style>