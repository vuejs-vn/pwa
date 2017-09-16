<template>
  <div id="app">
    <site-header></site-header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      {{#router}}
      <router-view></router-view>
      {{else}}
      <home></home>
      {{/router}}
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
{{#unless router}}
import Home from './components/page/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import SiteHeader from './components/shared/SiteHeader'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import SiteFooter from './components/shared/SiteFooter'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    text-align: center;
    margin-top: 40px;
    flex:1;
  }

  .site-header,
  .site-footer {
    flex: 0;
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  .site-header span,
  .site-footer span{
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
