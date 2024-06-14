<script setup>

import TheHeader from "../App.vue";
import TheFooter from "../App.vue";
</script>

<template>
<div class="">
  <TheHeader />
  <div class="">
    <slot />
  </div>
  <TheFooter />
</div>
</template>

<style scoped>

</style>
