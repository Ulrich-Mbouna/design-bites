<template>
  <footer>
    <div class="uk-section-default uk-section uk-section-small uk-padding-remove-bottom">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-grid-row-large" uk-grid>
          <div class="uk-width-1-2@m">
            <div class="uk-h3 uk-text-left@m uk-text-center">
              We Offer Awesome Design
              <br class="uk-visible@s">
              Resources to Bring Ideas to Life
            </div>
          </div>
          <div class="uk-width-1-3 uk-width-expand@m">
            <h3 class="uk-h5 uk-text-center uk-text-left@m">Company</h3>
            <ul class="uk-list uk-text-left@m uk-text-center">
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">About</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Licence & FAQ</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Blog</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Imprint</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="uk-width-1-3 uk-width-expand@m">
            <h3 class="uk-h5 uk-text-left@m uk-text-center">Resources</h3>
            <ul class="uk-list uk-text-left@m uk-text-center">
              <li>
                <div class="uk-panel">
                  <router-link to="/fonts" class="uk-link-muted uk-margin-remove-last-child">Fonts</router-link>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Brushes</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Vectors</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Graphics</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Mockups</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">UI Kits</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="uk-width-1-3 uk-width-expand@m">
            <h3 class="uk-text-center uk-text-left@m uk-h5">Social</h3>
            <ul class="uk-list uk-text-left@m uk-text-center">
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Facebook</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Pinterest</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Vectors</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Behance</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Instagram</a>
                </div>
              </li>
              <li>
                <div class="uk-panel">
                  <a href="" class="uk-link-muted uk-margin-remove-last-child">Twitter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-child-width-1-1 uk-margin-large" uk-grid>
          <div class="uk-width-1-1@m">
            <hr>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section uk-section-small">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-grid-row-small" uk-grid>
          <div class="uk-width-auto@m">
            <div class="uk-margin-large uk-text-left@m uk-text-center">
              <a href="">
                <img src="/images/logo.svg" width="80" height="80" loading="lazy" alt="">
              </a>
            </div>
          </div>
          <div class="uk-width-expand@m uk-flex-bottom uk-grid-item-match">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-panel uk-text-meta uk-margin uk-text-right@m uk-text-center">
                ©
                <time :datetime="new Date().toJSON()">{{datetime}}</time>
                Design Bites. All rights reserved.
                <br class="uk-hidden@s">
                Powered by <a href="https://www.linkedin.com/in/ulrich-mbouna/">Ulrich Mbouna</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

defineOptions({
  name: 'TheFooter'
})
const datetime = new Intl.DateTimeFormat(window.document.documentElement.lang, {year: 'numeric'}).format()
</script>
