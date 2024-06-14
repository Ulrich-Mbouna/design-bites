<script setup>
import MainLayout from "../../layouts/MainLayout.vue";


const articles = [
  {
    title: 'Bellefair',
    description: 'By N. Shinn & L. L. Turkenic',
    srcset: '/images/resources-post-bellefair-bedfd867.webp 610w, /images/resources-post-bellefair-8b7c84fb.webp 768w, /images/resources-post-bellefair-6e36b237.webp 1024w, /images/resources-post-bellefair-c738c6fd.webp 1219w, /images/resources-post-bellefair-9c6d58b9.webp 1220w',
    image: '/images/resources-post-bellefair-d84bbbd1.jpeg',
    link: '/fonts/bellefair'
  },
  {
    title: 'Selima',
    description: 'By Jroh Creative',
    srcset: '/images/resources-post-selima-3ce088a8.webp 610w,\n' +
        '/images/resources-post-selima-1d52256d.webp 768w,\n' +
        '/images/resources-post-selima-77ccaae7.webp 1024w,\n' +
        '/images/resources-post-selima-dec2de2d.webp 1219w,\n' +
        '/images/resources-post-selima-85974069.webp 1220w,',
    image: '/images/resources-post-selima-d569dcaa.jpeg',
    link: '/fonts/selima'
  },
  {
    title: 'Roboto Mono',
    description: 'By Christian Roberson',
    srcset: '/images/resources-post-roboto-mono-86ae28f2.webp 610w,\n' +
        '/images/resources-post-roboto-mono-431a5ecf.webp 768w,\n' +
        '/images/resources-post-roboto-mono-4f4a2058.webp 1024w,\n' +
        '/images/resources-post-roboto-mono-e6445492.webp 1219w,\n' +
        '/images/resources-post-roboto-mono-bd11cad6.webp 1220w,',
    image: '/images/resources-post-roboto-mono-8ef0af93.jpeg',
    link: '/fonts/roboto-mono'
  },
  {
    title: 'Reey',
    description: 'By Koen van Bliek',
    srcset: '/images/resources-post-reey-0812c248.webp 610w,\n' +
        '/images/resources-post-reey-ed95c146.webp 768w,\n' +
        '/images/resources-post-reey-db809443.webp 1024w,\n' +
        '/images/resources-post-reey-728ee089.webp 1219w,\n' +
        '/images/resources-post-reey-29db7ecd.webp 1220w,',
    image: '/images/resources-post-reey-bbcd37ce.jpeg',
    link: '/fonts/reey'
  },
]
const categories = [{
  text: 'Sans',
  link: '/fonts/sans'
}, {
  text: 'Serif',
  link: '/fonts/serif'
}, {
  text: 'Display',
  link: '/fonts/display'
}, {
  text: 'Script',
  link: '/fonts/script'
}, {
  text: 'Mono',
  link: '/fonts/mono'
}]
const breadcrumbs = [
  {
    text: 'Resources',
    link: '/resources'
  },
  {
    text: 'Fonts',
    link: '/fonts'
  }
]
</script>

<template>
  <MainLayout :articles :breadcrumbs :categories>
    <template #bannerTitle>Fonts</template>
    <template #bannerDescription>
      Explore Beautiful Fonts in Our Extensive Library
    </template>
    <template #secondSectionTitle>All Items</template>
    <template #bannerCategories></template>
    <template #breadcumbs></template>
  </MainLayout>
</template>

<style scoped>

</style>
