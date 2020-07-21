import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index/Index.vue'
import Search from '../pages/Search/search.vue'
import Personal from '../pages/personal/personal.vue'
import Cart from '../pages/Cart/cart.vue'
import Login from '../pages/Login/login.vue'
import Register from '../pages/Register/Register.vue'


Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		name:'Index',
		component:Index
	},
	{
		path:'/search',
		name:'Search',
		component:Search
	},
	{
		path:'/personal',
		name:'Personal',
		component:Personal
	},
	{
		path:'/cart',
		name:'Cart',
		component:Cart
	},
	{
		path:'/login',
		name:'Login',
		component:Login
	},
	{
		path:'/Register',
		name:'Register',
		component:Register
	}
]

const router = new VueRouter({
	mode:'history',
	base:process.env.BASE_URL,
	routes
})

export default router