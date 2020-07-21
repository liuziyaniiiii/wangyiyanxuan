import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

import {
	Button,Col,Row,Icon,Field,
	Tab,Tabs,Swipe,SwipeItem,Grid,
	GridItem,Collapse,CollapseItem,Tabbar,TabbarItem,
	Sidebar, SidebarItem,Form 
} from 'vant';
Vue.use(Button).use(Col).use(Row).use(Icon)
.use(Field).use(Tab).use(Tabs).use(Swipe).use(SwipeItem)
.use(Grid).use(GridItem).use(Collapse).use(CollapseItem)
.use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem)
.use(Form)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
