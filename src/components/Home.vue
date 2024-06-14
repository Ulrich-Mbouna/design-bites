<script setup>
import Banner from "./Banner.vue";
const pageData = {
  title: {
    isBr: true,
    text: 'Awesome Design',
    textAlt: 'Resources'
  },
  description: 'Explore Our Premium Design Assets to Reinforce Your Creative Flow'
}
</script>

<template>
  <span class="uk-margin-remove-adjacent"></span>
  <section class="uk-section-muted uk-section uk-section-xlarge uk-padding-remove-bottom uk-inverse-dark"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade;delay:false">
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
              Awesome Design
              <br >
              Resources
            </h1>
            <div class="uk-panel uk-text-large uk-position-relative uk-margin-medium uk-text-center  z-[3]"
                 uk-scrollspy-class> Explore Our Premium Design Assets to Reinforce Your Creative Flow
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
  <section class="uk-section uk-section-large uk-section-muted"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small;delay:false">
    <div class="uk-container uk-container-xlarge">
      <div class=" uk-child-width-1-1 " uk-grid>
        <div class="uk-width-1-1@m">
          <h2 class="uk-h3 uk-heading-bullet uk-margin-medium  before:content-[''] before:!border-primary"
              uk-scrollspy-class>
            Latest Resources
          </h2>
          <div class="uk-margin">
            <div class="uk-child-width-1-1 uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@m " uk-grid>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="/images/resources-post-bellefair-bedfd867.webp 610w, /images/resources-post-bellefair-8b7c84fb.webp 768w, /images/resources-post-bellefair-6e36b237.webp 1024w, /images/resources-post-bellefair-c738c6fd.webp 1219w, /images/resources-post-bellefair-9c6d58b9.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-bellefair-d84bbbd1.jpeg" width="610"
                             height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Bellefair</h3>
                      <div class="uk-text-meta uk-margin-small-top">Serif</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="/images/resources-post-balou-illustration-set-2db6719d.webp 610w, /images/resources-post-balou-illustration-set-7884ac32.webp 768w, /images/resources-post-balou-illustration-set-8c7d300b.webp 1024w, /images/resources-post-balou-illustration-set-257344c1.webp 1219w, /images/resources-post-balou-illustration-set-7e26da85.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-balou-illustration-set-691e1700.jpeg"
                             width="610" height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Balou Illustration Set</h3>
                      <div class="uk-text-meta uk-margin-small-top">Illustrations</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-max-ui-kit-489eccc6.webp 610w,
                                    /images/resources-post-max-ui-kit-7cb31509.webp 768w,
                                    /images/resources-post-max-ui-kit-3d72ee96.webp 1024w,
                                    /images/resources-post-max-ui-kit-947c9a5c.webp 1219w,
                                    /images/resources-post-max-ui-kit-cf290418.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-max-ui-kit-88b87192.jpeg" width="610"
                             height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Max UI Kit</h3>
                      <div class="uk-text-meta uk-margin-small-top">Personal</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-laptop-sideboard-6e44ebdb.webp 610w,
                                    /images/resources-post-laptop-sideboard-d48eaca3.webp 768w,
                                    /images/resources-post-laptop-sideboard-0bd999d9.webp 1024w,
                                    /images/resources-post-laptop-sideboard-a2d7ed13.webp 1219w,
                                    /images/resources-post-laptop-sideboard-f9827357.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-laptop-sideboard-0ba265ba.jpeg"
                             width="610" height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Laptop Sideboard</h3>
                      <div class="uk-text-meta uk-margin-small-top">Devices</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-painting-brushes-08b25989.webp 610w,
                                    /images/resources-post-painting-brushes-399bcd08.webp 768w,
                                    /images/resources-post-painting-brushes-4a30f6d8.webp 1024w,
                                    /images/resources-post-painting-brushes-b86b1c56.webp 1219w,
                                    /images/resources-post-painting-brushes-e33e8212.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-painting-brushes-29ed0588.jpeg"
                             width="610" height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Painting Brushes</h3>
                      <div class="uk-text-meta uk-margin-small-top">Bristle</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-selima-3ce088a8.webp 610w,
                                    /images/resources-post-selima-1d52256d.webp 768w,
                                    /images/resources-post-selima-77ccaae7.webp 1024w,
                                    /images/resources-post-selima-85974069.webp 1219w,
                                    /images/resources-post-selima-dec2de2d.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-selima-d569dcaa.jpeg" width="610"
                             height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Selima</h3>
                      <div class="uk-text-meta uk-margin-small-top">Script</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-block-in-mind-f6d82f2e.webp 610w,
                                    /images/resources-post-block-in-mind-31aed025.webp 768w,
                                    /images/resources-post-block-in-mind-0fe79fb0.webp 1024w,
                                    /images/resources-post-block-in-mind-a6e9eb7a.webp 1219w,
                                    /images/resources-post-block-in-mind-fdbc753e.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-block-in-mind-68301cf6.jpeg"
                             width="610" height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Block in Mind</h3>
                      <div class="uk-text-meta uk-margin-small-top">Mashups</div>
                    </div>
                  </a>
                </article>
              </div>
              <div class="">
                <article class=" uk-grid-item-match" uk-scrollspy-class>
                  <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                    <div class="uk-card-media-top">
                      <picture>
                        <source type="image/webp"
                                srcset="
                                    /images/resources-post-roboto-mono-86ae28f2.webp 610w,
                                    /images/resources-post-roboto-mono-431a5ecf.webp 768w,
                                    /images/resources-post-roboto-mono-4f4a2058.webp 1024w,
                                    /images/resources-post-roboto-mono-e6445492.webp 1219w,
                                    /images/resources-post-roboto-mono-bd11cad6.webp 1220w"
                                sizes="(min-width: 610px) 610px">
                        <img alt="" decoding="async" src="/images/resources-post-roboto-mono-8ef0af93.jpeg" width="610"
                             height="407" loading="lazy">
                      </picture>
                    </div>
                    <div class="uk-card-body uk-margin-remove-first-child">
                      <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Painting Brushes</h3>
                      <div class="uk-text-meta uk-margin-small-top">Bristle</div>
                    </div>
                  </a>
                </article>
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
  <section class="uk-section uk-section-secondary uk-preserve-color"
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay:false">
    <div class="uk-container uk-container-large">
      <div class="uk-grid-column-large" uk-grid>
        <div class="uk-width-1-3@m uk-light">
          <h2 uk-scrollspy-class class="uk-position-relative top-[15px]">
            Explore Our Assets
            <br class="uk-visible@m">
            by Category
          </h2>
        </div>
        <div class="uk-width-2-3@m">
          <div class="uk-position-relative uk-margin uk-width-2xlarge uk-margin-auto top-[15px]">
            <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-medium uk-grid-match pb-[50px]"
                 uk-grid="parallax:50">
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-fonts-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">Fonts</h3>
                  </a>
                </div>
              </div>
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-brushes-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">Brushes</h3>
                  </a>
                </div>
              </div>
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-vectors-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">Vectors</h3>
                  </a>
                </div>
              </div>
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-graphics-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">Graphics</h3>
                  </a>
                </div>
              </div>
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-mockups-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">Mockups</h3>
                  </a>
                </div>
              </div>
              <div class="">
                <div class="uk-grid-item-match" uk-scrollspy-class>
                  <a href=""
                     class="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle">
                    <img alt="" decoding="async" width="50" height="50" loading="lazy" class="uk-text-primary" uk-svg
                         src="/images/resources-category-ui-kits-intro.svg">
                    <h3 class="uk-h4 uk-margin-medium-top uk-margin-remove-bottom">UI Kits</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="uk-section-muted "
           uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay:false">
    <div
        class="uk-section uk-section-xlarge uk-background-norepeat uk-background-contain uk-background-bottom-left"
        data-src="/images/bottom-bg.svg"
        uk-parallax="bgx: -120,-120; bgy:420,120; easing:0.5"
        uk-img>
      <div class="uk-container uk-container-xlarge">
        <div class="uk-child-width-1-1 uk-margin-xlarge uk-margin-remove-top" uk-grid="">
          <div class="uk-width-1-1@m">
            <h2 class="uk-heading-bullet uk-margin-medium before:border-primary before:content-[''] uk-h3"
                uk-scrollspy-class>Popular Resources</h2>
            <div class="uk-margin">
              <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" uk-grid>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-pink-mouth-9f8ee9d8.webp 610w,
                                    /images/resources-post-pink-mouth-9f4f5b27.webp 768w,
                                    /images/resources-post-pink-mouth-e1471f17.webp 1024w,
                                    /images/resources-post-pink-mouth-48496bdd.webp 1219w,
                                    /images/resources-post-pink-mouth-131cf599.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-pink-mouth-5b7a92bc.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Pink Mouth</h3>
                        <div class="uk-text-meta uk-margin-small-top">Mashups</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-cups-black-white-96eec8aa.webp 610w,
                                    /images/resources-post-cups-black-white-091793ab.webp 768w,
                                    /images/resources-post-cups-black-white-05df88d4.webp 1024w,
                                    /images/resources-post-cups-black-white-acd1fc1e.webp 1219w,
                                    /images/resources-post-cups-black-white-f784625a.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-cups-black-white-2e84f256.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Cups Black White</h3>
                        <div class="uk-text-meta uk-margin-small-top">Merch</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-abstract-art-brushes-fe390699.webp 610w,
                                    /images/resources-post-abstract-art-brushes-62f475bd.webp 768w,
                                    /images/resources-post-abstract-art-brushes-f160de63.webp 1024w,
                                    /images/resources-post-abstract-art-brushes-586eaaa9.webp 1219w,
                                    /images/resources-post-abstract-art-brushes-033b34ed.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-abstract-art-brushes-0b7a6d24.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Abstract Art Brushes</h3>
                        <div class="uk-text-meta uk-margin-small-top">Art</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-poster-frame-130320de.webp 610w,
                                    /images/resources-post-poster-frame-12f3b483.webp 768w,
                                    /images/resources-post-poster-frame-3071c409.webp 1024w,
                                    /images/resources-post-poster-frame-997fb0c3.webp 1219w,
                                    /images/resources-post-poster-frame-c22a2e87.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-poster-frame-0fd064ae.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Poster Frame</h3>
                        <div class="uk-text-meta uk-margin-small-top">Print</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-reey-bbcd37ce.jpeg 610w,
                                    /images/resources-post-reey-ed95c146.webp 768w,
                                    /images/resources-post-reey-db809443.webp 1024w,
                                    /images/resources-post-reey-728ee089.webp 1219w,
                                    /images/resources-post-reey-29db7ecd.webp 1220w" sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-reey-bbcd37ce.jpeg" width="610" height="407" loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Reey</h3>
                        <div class="uk-text-meta uk-margin-small-top">Script</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-floating-flowers-fe738159.webp 610w,
                                    /images/resources-post-floating-flowers-119045ff.webp 768w,
                                    /images/resources-post-floating-flowers-69c19aef.webp 1024w,
                                    /images/resources-post-floating-flowers-c0cfee25.webp 1219w,
                                    /images/resources-post-floating-flowers-9b9a7061.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-floating-flowers-1ebfbe6f.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Floating Flowers</h3>
                        <div class="uk-text-meta uk-margin-small-top">Art</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-makai-icon-bundle-72c57e9d.webp 610w,
                                    /images/resources-post-makai-icon-bundle-36109024.webp 768w,
                                    /images/resources-post-makai-icon-bundle-78e71166.webp 1024w,
                                    /images/resources-post-makai-icon-bundle-d1e965ac.webp 1219w,
                                    /images/resources-post-makai-icon-bundle-8abcfbe8.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-makai-icon-bundle-656d28e2.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Makai Icon Bundle</h3>
                        <div class="uk-text-meta uk-margin-small-top">Icons</div>
                      </div>
                    </a>
                  </article>
                </div>
                <div class="">
                  <article class="uk-grid-item-match" uk-scrollspy-class>
                    <a href="" class="uk-card uk-card-default uk-card-hover uk-link-toggle">
                      <div class="uk-card-media-top">
                        <picture>
                          <source type="image/webp"
                                  srcset="
                                    /images/resources-post-orange-letterhead-24003386.webp 610w,
                                    /images/resources-post-orange-letterhead-88badb94.webp 768w,
                                    /images/resources-post-orange-letterhead-b33808a1.webp 1024w,
                                    /images/resources-post-orange-letterhead-1a367c6b.webp 1219w,
                                    /images/resources-post-orange-letterhead-4163e22f.webp 1220w"
                                  sizes="(min-width: 610px) 610px">
                          <img alt="" decoding="async"
                               src="/images/resources-post-orange-letterhead-3ab610ce.jpeg" width="610" height="407"
                               loading="lazy">
                        </picture>
                      </div>
                      <div class="uk-card-body uk-margin-remove-first-child">
                        <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">Orange Letterhead</h3>
                        <div class="uk-text-meta uk-margin-small-top">Print</div>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
            <div class="uk-margin-medium uk-text-right@m" uk-scrollspy-class>
              <a href=""
                 class="after:transition-all hover:after:translate-x-2 pr-[43px] uk-button uk-button-text after:bg-[url('/images/arrow-right.svg')] after:bg-[calc(100%-5px)_50%] after:bg-no-repeat after:content-[''] after:absolute after:top-1/2 after:right-0 after:size-[35px] after:-translate-y-1/2">All
                Resources</a>
            </div>
          </div>
        </div>
        <div class="uk-container uk-container-small">
          <div class="uk-child-width-1-1" uk-grid>
            <div class="uk-width-1-1@m uk-grid-item-match">
              <div class="uk-tile uk-tile-secondary">
                <h2 class="uk-text-center uk-margin-medium" uk-scrollspy-class>Subscribe to Our Newsletter to
                  <br class="uk-visible@s">
                  Get Our Weekly Updates
                </h2>
                <div class="uk-margin-auto@s uk-margin-auto uk-width-2xlarge uk-text-center" uk-scrollspy-class>
                  <form class="uk-panel uk-form">
                    <div class="uk-child-width-expand@s uk-grid-small" uk-grid>
                      <div class="">
                        <input type="email" class="uk-input" name="email" placeholder="Email address"
                               aria-label="Email address" required>
                      </div>
                      <div class="uk-width-auto@s">
                        <button class="uk-button uk-button-default" type="submit">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
