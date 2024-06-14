<script lang="ts" setup>
import {fonts} from "../../../datas";
import {useRoute} from "vue-router";
import {computed} from "vue";
import FontCard from "./FontCard.vue";

const route = useRoute()
const {font, subfont} = route.params

const fontData = fonts.find(_font => _font.slug === font)
const subfontData = fontData.articles.find(_subfont => _subfont.slug === subfont)

const breadcrumbs = computed<string[]>(() => route.fullPath.split('/').slice(1))
const subFontRecommandation = fontData.articles.filter(_font => _font.slug !== subfont)
</script>

<template>
  <section class="uk-section uk-section-large uk-padding-remove-bottom uk-section-muted">
    <div class="uk-container">
      <div class="" uk-grid>
        <div class="uk-panel uk-width-1-3@m">
          <div class="">
            <nav aria-label="Breadcrumb" class="uk-text-left z-10" uk-scrollspy-class>
              <ul class="uk-breadcrumb uk-margin-remove-bottom uk-text-left" typeof="BreafcrumbList">
                <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb"
                    class="before:content-['>'] [&:first-of-type]:before:content-[''] before:text-primary before:font-semibold">
                  <router-link :to="'/'+breadcrumb" class="capitalize">
                    <span>{{ breadcrumb }}</span>
                  </router-link>
                </li>
              </ul>
            </nav>
            <h1 class="font-bold text-6xl">{{ subfontData.title }}</h1>
            <div class="uk-hidden@m uk-margin" uk-slideshow="ratio:3:2">
              <div class="uk-position-relative">
                <ul class="uk-slideshow-items">
                  <li class="uk-active">
                    <picture>
                      <source :srcset="subfontData.srcset" sizes="(max-aspect-ratio:900/600) 150vh" type="image/webp">
                      <img :src="subfontData.image" alt="" decoding="async" fetchpriority="high" height="600"
                           loading="eager" width="900">
                    </picture>
                  </li>
                </ul>
              </div>
            </div>

            <div class="uk-margin-medium">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum eligendi esse facilis recusandae repellat soluta totam ut vel!</span>
              <span>Lorem ipsum dolor sit amet vel!</span>
              <span>Lorem ipsum dolor sit amet vel!</span>
              <span>Lorem ipsum dolor sit amet vel!</span>
            </div>
            <ul class="uk-margin uk-list [&>li>div]:flex [&>li>div]:items-center [&>li>div]:justify-between">
              <li>
                <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small" uk-grid>
                  <div class="uk-width-small uk-text-break">
                    <div class="font-bold uk-margin-remove">
                      Category
                    </div>
                  </div>
                  <div>
                    <div class="">
                      <router-link class="uk-link-reset" to="/">{{fontData.title.text}}</router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small" uk-grid>
                  <div class="uk-width-small">
                    <div class="font-bold">
                      Format
                    </div>
                  </div>
                  <div>
                    <div class="">
                      <router-link class="uk-link-reset" to="/">ttf</router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small" uk-grid>
                  <div class="uk-width-small">
                    <div class="font-bold">
                      Licence
                    </div>
                  </div>
                  <div>
                    <div class="">
                      <router-link class="uk-link-reset" to="/">OFL</router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small" uk-grid>
                  <div class="uk-width-small">
                    <div class="font-bold">
                      Date
                    </div>
                  </div>
                  <div>
                    <div class="">
                      <router-link class="uk-link-reset" to="/">19 Oct, 2019</router-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr>
          <div class="uk-panel uk-margin">
            <div class="uk-flex-middle uk-grid-column-medium" uk-grid>
              <div class="uk-width-auto">
                <picture>
                  <source sizes="(min-width: 80px) 80px"
                          srcset="/images/resources-creator-vernon-adams-b9a5a38a.webp 80w, /images/resources-creator-vernon-adams-2324e769.webp 160w"
                          type="image/webp">
                  <img alt="" class="uk-border-circle" decoding="async" height="80"
                       loading="eager" src="/images/resources-creator-vernon-adams-6bf5c19f.jpeg" width="80">
                </picture>
              </div>
              <div class="uk-width-expand">
                <div class="uk-h5 uk-margin-remove-bottom font-bold">Creator</div>
                <div class="uk-panel">Vernon Adams</div>
              </div>
            </div>
          </div>
          <div class="uk-margin-large">
            <a class="uk-button uk-button-primary uk-width-1-1 uk-button-large" href="">Download</a>
          </div>
        </div>
        <div class="uk-width-2-3@m uk-panel">
          <div class="uk-visible@m uk-margin">
            <div class="uk-child-width-1-1 uk-grid-match" uk-grid>
              <div class="">
                <div class="uk-panel uk-margin-remove-first-child">
                  <picture>
                    <source :srcset="subfontData.srcset" sizes="(min-width:1600px) 1600px" type="image/webp">
                    <img :src="subfontData.image" alt="" class="uk-border-rounded" decoding="async" fetchpriority="high"
                         height="1067" loading="eager" width="1600">
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-margin-large uk-margin-large-bottom">
        <h3 class="uk-heading-bullet before:content-[''] before:border-primary"><span>You Might Also Like</span></h3>
        <div class="uk-child-width-1-1 uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@m " uk-grid>
          <div class="" v-for="article in subFontRecommandation" :key="article.slug">
            <FontCard :article="article"/>
          </div>
        </div>
        <p class="text-right">
          <router-link to="" class="uk-link-reset font-medium !text-black">
            <span>All Resources</span>
            <span uk-icon="arrow-right"></span>
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

