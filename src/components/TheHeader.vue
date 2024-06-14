<template>
  <header class="tm-header absolute right-0 left-0"
          uk-inverse="target: .uk-navbar-container;sel-active:.uk-navbar-transparent">
    <div class="" uk-sticky="
      show-on-up: true; animation:uk-animation-slide-top; cls-active: uk-navbar-sticky;
      sel-target: .uk-navbar-container; cls-inactive: uk-navbar-transparent">
      <div class="uk-navbar-container uk-navbar-transparent">
        <div class="uk-container uk-container-expand">
          <nav class="" uk-navbar="
            align:center; container: .tm-header>[uk-sticky]; boundary: .tm-header .uk-navbar-container;
            target-x: .tm-header .uk-navbar; target-y:.tm-header .uk-navbar-container; dropbar:true; dropbar-anchor: .tm-header .uk-navbar-container; dropbar-transparent-mode: remove">
            <div class="uk-navbar-left">
              <router-link to="/" aria-label="Back to Home" class="uk-logo uk-navbar-item">
                <img src="/images/logo.svg" class="!w-[80px] !h-[30px] lg:!w-[100px] lg:!h-[38px]" alt="Design Bites"
                     loading="eager" uk-svg>
              </router-link>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav max-lg:hidden">
                <li>
                  <a href="" class="" aria-haspopup="true" role="button">Resources</a>
                  <div id="dropbar" class="uk-dropbar uk-navbar-dropdown uk-dropbar-top uk-dropbar-large uk-navbar-dropdown-dropbar"
                       uk-drop>
                    <div
                        class="uk-grid-column-small uk-child-width-auto@s uk-child-width-1-3@m uk-child-width-expand@l "
                        uk-grid>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="/public">
                            <img src="/images/resources-category-fonts-intro.svg" class="uk-text-primary" width="25"
                                 height="25" alt="" uk-svg>
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <router-link to="/fonts" class="uk-link-reset uk-drop-close">Fonts</router-link>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li>
                              <router-link :to="{path: '/fonts/sans'}" class="uk-drop-close">Sans</router-link>
                            </li>
                            <li><router-link to="/fonts/serif" class="uk-drop-close">Serif</router-link></li>
                            <li><router-link to="/fonts/display" class="uk-drop-close">Display</router-link></li>
                            <li><router-link to="/fonts/script" class="uk-drop-close">Script</router-link></li>
                            <li><router-link to="/fonts/mono" class="uk-drop-close">Mono</router-link></li>
                          </ul>
                        </div>
                      </div>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="/public">
                            <img src="/images/resources-category-brushes-intro.svg" class="uk-text-primary" width="25"
                                 height="25" alt="" uk-svg>
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <a href="" class="uk-link-reset">Brushes</a>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li><a href="">Art</a></li>
                            <li><a href="">Decorative</a></li>
                            <li><a href="">Bristle</a></li>
                            <li><a href="">Sponge</a></li>
                            <li><a href="">Grunge</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="/public">
                            <img src="/images/resources-category-vectors-intro.svg" class="uk-text-primary" width="25"
                                 height="25" alt="" uk-svg>
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <a href="" class="uk-link-reset">Vectors</a>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li><a href="">Logos</a></li>
                            <li><a href="">Icons</a></li>
                            <li><a href="">Decorations</a></li>
                            <li><a href="">Illustrations</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="uk-width-1-1@m uk-width-1-2@l max-lg:hidden">
                        <div class="uk-h4 uk-visble@l">Top Picks</div>
                        <div class="uk-margin uk-visible@l">
                          <div class="uk-child-width-1-1 uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-pink-mouth-117f3662.webp 260w, /images/resources-post-pink-mouth-d202d631.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-pink-mouth-d58b4d06.jpeg" width="260" height="173"
                                         alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Pink Mouth</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Mashups</a>
                                </div>
                              </article>
                            </div>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-cups-black-white-181f1710.webp 260w, /images/resources-post-cups-black-white-445a1ebd.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-pink-mouth-d58b4d06.jpeg" width="260" height="173"
                                         alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Cups Black White</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Merch</a>
                                </div>
                              </article>
                            </div>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-abstract-art-brushes-70c8d923.webp 260w, /images/resources-post-abstract-art-brushes-2fb9f8ab.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-abstract-art-brushes-858bb29e.jpeg" width="260"
                                         height="173" alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Abstract Art Brushes</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Art</a>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                        class="uk-grid-column-small uk-margin-large uk-margin-remove-bottom uk-child-width-auto@ uk-child-width-1-3@s uk-child-width-expand@l"
                        uk-grid>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="">
                            <img src="/images/resources-category-graphics-intro.svg" uk-svg width="25" height="25"
                                 class="uk-text-primary " alt="">
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <a href="" class="uk-link-reset">Graphics</a>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li>
                              <a href="">Art</a>
                            </li>
                            <li>
                              <a href="">Mashups</a>
                            </li>
                            <li>
                              <a href="">Lights</a>
                            </li>
                            <li>
                              <a href="">Pattern</a>
                            </li>
                            <li>
                              <a href="">Textures</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="">
                            <img src="/images/resources-category-mockups-intro.svg" uk-svg width="25" height="25"
                                 class="uk-text-primary " alt="">
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <a href="" class="uk-link-reset">Mockups</a>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li>
                              <a href="">Print</a>
                            </li>
                            <li>
                              <a href="">Devices</a>
                            </li>
                            <li>
                              <a href="">Merch</a>
                            </li>
                            <li>
                              <a href="">Pzckaging</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="">
                        <div class="uk-panel uk-margin-remove-first-child uk-margin"
                             uk-scrollspy="target: [uk-scrollspy-class]">
                          <a href="">
                            <img src="/images/resources-category-ui-kits-intro.svg" loading="lazy" uk-svg width="25"
                                 height="25" class="uk-text-primary " alt="">
                          </a>
                          <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">
                            <a href="" class="uk-link-reset">UI Kits</a>
                          </div>
                        </div>
                        <div class="">
                          <ul class="uk-margin-remove-bottom uk-nav uk-nav-default">
                            <li>
                              <a href="">Personal</a>
                            </li>
                            <li>
                              <a href="">Food</a>
                            </li>
                            <li>
                              <a href="">Shopping</a>
                            </li>
                            <li>
                              <a href="">Travel</a>
                            </li>
                            <li>
                              <a href="">Business</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="uk-width-1-1@m uk-width-1-2@l uk-visible@l">
                        <div class="uk-h4 uk-visble@l">New Releases</div>
                        <div class="uk-margin uk-visible@l">
                          <div class="uk-child-width-1-1 uk-child-width-1-3@s uk-grid-small uk-grid-match" uk-grid>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-bellefair-302e07dd.webp 260w, /images/resources-post-bellefair-c63109ed.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-bellefair-56ba646b.jpeg" width="260" height="173"
                                         alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Bellefair</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Serif</a>
                                </div>
                              </article>
                            </div>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-cups-black-white-181f1710.webp 260w, /images/resources-post-cups-black-white-445a1ebd.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-pink-mouth-d58b4d06.jpeg" width="260" height="173"
                                         alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Balou Illustration Set</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Illustrations</a>
                                </div>
                              </article>
                            </div>
                            <div class="">
                              <article class="uk-panel uk-margin-remove-first-child">
                                <a href="">
                                  <picture>
                                    <source type="image/webp"
                                            srcset="/images/resources-post-abstract-art-brushes-70c8d923.webp 260w, /images/resources-post-abstract-art-brushes-2fb9f8ab.webp 520w"
                                            sizes="(min-width: 260px) 260px">
                                    <img src="/images/resources-post-abstract-art-brushes-858bb29e.jpeg" width="260"
                                         height="173" alt="">
                                  </picture>
                                </a>
                                <div class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                                  <a href="" class="uk-link-reset">Max UI Kit</a>
                                </div>
                                <div class="uk-text-meta">
                                  <a href="" rel="tag">Personal</a>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <router-link to="/about" role="button">About</router-link>
                </li>
                <li>
                  <router-link class="" to="/blog" role="button">Blog</router-link>
                </li>
              </ul>
              <div class="uk-navbar-item max-lg:hidden">
                <button class="uk-button bg-primary text-white rounded">Upload</button>
              </div>
              <a href="#menu-modal" uk-toggle class="uk-navbar-toggle uk-navbar-toggle-animate lg:hidden"
                 aria-label="Open Menu" uk-navbar-toggle-icon></a>
              <div class="uk-modal-full" id="menu-modal" uk-modal>
                <div class="uk-modal-dialog uk-flex" role="dialog">
                  <button class="uk-modal-close-default uk-icon uk-close" type="button"
                          uk-toggle="cls: uk-modal-close-full uk-close-large uk-modal-close-default; mode: media; media: @s"
                          aria-label="Close" uk-close></button>
                  <div class="uk-modal-body uk-margin-auto uk-flex uk-flex-column uk-width-auto@s"
                       uk-toggle="cls: uk-padding-large; mode:media; media: @s"
                       uk-height-viewport>
                    <div class="uk-margin-auto-bottom">
                      <div class="uk-child-width-1-1" uk-grid>
                        <div class="">
                          <div class="uk-panel">
                            <a href="/public" aria-label="Back to Home" class="uk-logo">
                              <img width="80" height="30" src="/images/logo.svg" alt="Design Bites" loading="eager"
                                   uk-svg>
                            </a>
                          </div>
                        </div>
                        <div class="">
                          <div class="">
                            <div class="uk-panel">
                              <ul class="uk-nav uk-nav-primary [&>li>a]:text-cusgray [&>li>a:hover]:text-primary-pink">
                                <li>
                                  <router-link to="/resources">Resources</router-link>
                                </li>
                                <li>
                                  <router-link to="/fonts">Fonts</router-link>
                                </li>
                                <li>
                                  <router-link to="/brushes">Brushes</router-link>
                                </li>
                                <li>
                                  <router-link to="/vectors">Vectors</router-link>
                                </li>
                                <li>
                                  <router-link to="/graphics">Graphics</router-link>
                                </li>
                                <li>
                                  <router-link to="/mockups">Mockups</router-link>
                                </li>
                                <li>
                                  <router-link to="/ui-kits">UI Kits</router-link>
                                </li>
                                <li>
                                  <router-link to="/view-all">View all</router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="uk-panel">
                            <div class="uk-child-width-1-1" uk-grid>
                              <div class="">
                                <hr>
                                <ul class="uk-list">
                                  <li>
                                    <div class="uk-panel">
                                      <a href="" class="uk-link-muted">About</a>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="uk-panel">
                                      <a href="" class="uk-link-muted">Blog</a>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="uk-panel">
                                      <a href="" class="uk-link-muted">Licence & FAQ</a>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="uk-panel">
                                      <a href="" class="uk-link-muted">Imprint</a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class="uk-panel">
                            <div class="uk-child-width-1-1" uk-grid>
                              <div class="">
                                <div class="uk-margin">
                                  <a href="" class="uk-button !bg-secondary text-white uk-width-1-1 rounded" uk-scroll>Upload</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'TheHeader'
}
</script>
