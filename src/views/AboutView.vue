<template>
  <div>
    <div class="top">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script lang="js"  setup>
import HelloWorld from "../components/HelloWorld.vue";
</script>

<style scoped>
.top {
  width: 50%;
  height: 100px;

  margin: 50px;
}
</style>