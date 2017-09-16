{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#style}}
import 'normalize.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/style}}{{#webFontLoader}}
import webFontLoader from 'webfontloader'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/webFontLoader}}{{#router}}{{#vuex}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/vuex}}{{/router}}{{#style}}
import './styles/main.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/style}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/vuex}}{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#vuex}}

sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/vuex}}{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#webFontLoader}}
webFontLoader.load({
  google: {
    families: ['Roboto:400,500,700:vietnamese']{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/webFontLoader}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
