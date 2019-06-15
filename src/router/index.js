import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const attentionMsgManager = r => require.ensure([], () => r(require('@/page/attentionMsgManager')), 'attentionMsgManager');
const PublicAccountManagement = r => require.ensure([], () => r(require('@/page/PublicAccountManagement')), 'PublicAccountManagement');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/shopList',
			component: shopList,
			meta: ['数据管理', '商家列表'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['数据管理', '食品列表'],
		},{
			path: '/visitor',
			component: visitor,
			meta: ['图表', '用户分布'],
		},{
            path: '/attentionMsgManager',
            component: attentionMsgManager,
            meta: ['微信后台管理', '关注消息管理'],
        },{
            path: '/PublicAccountManagement',
            component: PublicAccountManagement,
            meta: ['微信后台管理', '微信菜单管理'],
        }]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
