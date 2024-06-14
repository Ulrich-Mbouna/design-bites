<template>
  <article class=" uk-grid-item-match" uk-scrollspy-class>
    <router-link :to="article.link" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
      <div class="uk-card-media-top">
        <picture>
          <source type="image/webp" :srcset="article.srcset">
          <img alt="" decoding="async" :src="article.image" width="610" height="407" loading="lazy">
        </picture>
      </div>
      <div class="uk-card-body uk-margin-remove-first-child">
        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">{{ article.title }}</h3>
        <div class="uk-text-meta uk-margin-small-top">{{ article.description }}</div>
      </div>
    </router-link>
  </article>
</template>
<script>
export default {
  name: 'FontCard',
  props: {
    article: {}
  }
}
</script>