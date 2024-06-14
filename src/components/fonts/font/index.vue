<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
import MainLayout from "../../../layouts/MainLayout.vue";
import {fonts} from "../../../datas/index";

const route = useRoute()


const fontParam = route.params.font

const pageData = ref({})

pageData.value = fonts.find(_font => _font.slug === fontParam)
const breadcrumbs = [
  {
    text: 'Resources',
    link: '/resources'
  },
  {
    text: 'Fonts',
    link: '/fonts'
  },
  {
    text: pageData.value.title.text,
    link: `/fonts/${pageData.value.slug}`
  },
]

</script>

<template>
  <MainLayout :articles="pageData.articles" :breadcrumbs>
    <template #bannerTitle>{{ pageData.title.text}}</template>
    <template #bannerDescription>
      {{pageData.description}}
    </template>
    <template #secondSectionTitle>All Items</template>
    <template #bannerCategories></template>
    <template #breadcumbs></template>
  </MainLayout>
</template>

<style scoped>

</style>
