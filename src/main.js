// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vueresource from 'vue-resource'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI)
Vue.use(Vueresource)
Vue.use(Vuex)


Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
 	document.title = to.meta.title
 	}
 	next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
