import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
require('./mock/mock')

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$http =axios;

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
