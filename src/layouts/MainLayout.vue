<script setup lang="ts">
import FontCard from "../components/fonts/font/FontCard.vue";
import {IArticle} from "../types";
import {PropType} from "vue";

const props = defineProps({
  articles: {
    type: Array as  PropType<IArticle[]>,
    required: true
  },
  categories: {
    type: Array,
    required: false
  },
  breadcrumbs: {
    type: Array,
    required: false
  },
})
</script>

<template>
  <span class="uk-margin-remove-adjacent"></span>
  <section class="uk-section-muted uk-section uk-section-large uk-padding-remove-bottom uk-inverse-dark"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade;delay:false">
    <div class="uk-container uk-container-xlarge">
      <div class="h-[100px] uk-margin-remove-adjacent"></div>
      <div class="uk-child-width-1-1 " uk-grid>
        <div class="uk-width-1-1@m uk-grid-item-match">
          <div class="uk-panel uk-width-1-1">
            <div
                class="uk-position-absolute uk-width-1-1 uk-text-left sm:right-[33vw] md:top-[-10vh] right-[30vw] top-[-16vh] z-0 translate-y-[0vh] will-change-transform"
                uk-parallax="y:0,-9vh; easing:0.5"
            >
              <img fetchpriority="high" decoding="async" src="/images/home-hero-left.svg" alt="" class="max-w-[48vw]"
                   loading="eager" width="800" height="750">
            </div>
            <h1 class="uk-heading-2xlarge uk-font-primary uk-position-relative uk-text-center z-[3]" uk-scrollspy-class>
              <slot name="bannerTitle"></slot>
            </h1>
            <div class="uk-panel uk-text-large uk-position-relative uk-margin-medium uk-text-center  z-[3]"
                 uk-scrollspy-class> <slot name="bannerDescription"></slot>
            </div>
            <div class="uk-position-relative uk-margin-large uk-margin-remove-bottom uk-text-center z-[3]" v-if="$slots.bannerCategories">
              <div class="uk-child-width-auto uk-flex-center uk-grid-small uk-grid-match" uk-grid>
                <div class="" v-for="category in categories">
                  <div class="uk-margin-auto uk-width-small uk-grid-item-match" uk-scrollspy-class>
                    <router-link :to="category.link" class="uk-card uk-card-default uk-card-small uk-card-body uk-margin-remove-first-child uk-link-toggle">
                      <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">{{category.text}}</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div
                class="uk-position-absolute uk-width-1-1 uk-text-right right-[-20vw] md:right-[-30vw] md:bottom-[-30vh] bottom-[-24vh] z-0 translate-y-[4vh] will-change-transform"
                uk-parallax="y:4vh,-10vh; easing:0.5">
              <img fetchpriority="high" src="/images/home-hero-right.svg" decoding="async" width="650" height="600"
                   class="max-w-[43vw]" loading="eager" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="uk-section uk-section-large uk-section-muted"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small;delay:false">
    <div class="uk-container uk-container-xlarge">
      <div class=" uk-child-width-1-1 " uk-grid>
        <div class="uk-width-1-1@m">
          <div class="" v-if="$slots.breadcumbs">
            <nav class="uk-text-left z-10" aria-label="Breadcrumb" uk-scrollspy-class>
              <ul class="uk-breadcrumb uk-margin-remove-bottom uk-text-left" typeof="BreafcrumbList">
                <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.link" class="before:content-['>'] [&:first-of-type:before]:content-[''] before:text-primary before:font-semibold">
                  <router-link :to="breadcrumb.link">
                    <span>{{breadcrumb.text}}</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <h2 class="uk-h3 uk-heading-bullet uk-margin-medium  before:content-[''] before:!border-primary"
              uk-scrollspy-class>
            <slot name="secondSectionTitle"></slot>
          </h2>
          <div class="uk-margin">
            <div class="uk-child-width-1-1 uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@m " uk-grid>
              <div class="" v-for="article in articles" :key="article.slug">
                <FontCard  :article="article" />
              </div>
            </div>
          </div>
          <div class="uk-margin-medium uk-text-right@m " uk-scrollspy-class>
            <a href=""
               class="after:transition-all hover:after:translate-x-2 pr-[43px] uk-button uk-button-text after:bg-[url('/images/arrow-right.svg')] after:bg-[calc(100%-5px)_50%] after:bg-no-repeat after:content-[''] after:absolute after:top-1/2 after:right-0 after:size-[35px] after:-translate-y-1/2">All
              Resources</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
