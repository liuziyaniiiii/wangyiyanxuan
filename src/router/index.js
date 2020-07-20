import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index/Index.vue'
import Search from '@/components/Search/search.vue'


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
	}
]

const router = new VueRouter({
	mode:'history',
	base:process.env.BASE_URL,
	routes
})

export default router