<template>
  <section class="uk-section-muted uk-section uk-section-xlarge uk-padding-remove-bottom uk-inverse-dark"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade;delay:false"
  >
    <div class="uk-container uk-container-xlarge">
      <div class="h-[100px] uk-margin-remove-adjacent"></div>
      <div class="uk-child-width-1-1 " uk-grid>
        <div class="uk-width-1-1@m uk-grid-item-match">
          <div class="uk-panel uk-width-1-1">
            <div
                class="uk-position-absolute uk-width-1-1 uk-text-left right-[30vw] top-[-16vh] z-0 translate-y-[0vh] will-change-transform"
                uk-parallax="y:0,-9vh; easing:0.5"
            >
              <img fetchpriority="high" decoding="async" src="/images/home-hero-left.svg" alt="" class="max-w-[48vw]"
                   loading="eager" width="800" height="750">
            </div>
            <h1 class="uk-heading-xlarge uk-font-primary uk-position-relative uk-text-center  z-[3]" uk-scrollspy-class>
              {{ pageData.title.text }}
              <br v-if="pageData.title.isBr">
              {{pageData.title.textAlt}}
            </h1>
            <div class="uk-panel uk-text-large uk-position-relative uk-margin-medium uk-text-center  z-[3]"
                 uk-scrollspy-class> {{pageData.description}}
            </div>
            <div
                class="uk-position-absolute uk-width-1-1 uk-text-right right-[-20vw] bottom-[-24vh] z-0 translate-y-[4vh] will-change-transform"
                uk-parallax="y:4vh,-10vh; easing:0.5">
              <img fetchpriority="high" src="/images/home-hero-right.svg" decoding="async" width="650" height="600"
                   class="max-w-[43vw]" loading="eager" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineOptions({
  name: 'Banner'
})


const props = defineProps({
  pageData: {
    type: Object,
    require: true
  }
})
</script>
