<template>
  <div class="overflow-hidden">
    <TheHeader/>
    <main>
      <RouterView :key="route.fullPath" />
    </main>
    <TheFooter/>
  </div>
</template>

<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()
console.log({route, router})
</script>

