import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import moduleA from './moduleA'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    moduleA{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
