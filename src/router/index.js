import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Menu1 from '@/views/menu1'
import Menu2 from '@/views/menu2'
import Menu3 from '@/views/menu3'
import Tab1 from '@/views/tabs/tab1'
import Tab2 from '@/views/tabs/tab2'
import Tab3 from '@/views/tabs/tab3'
import Menu4 from '@/views/menu4'
import Menu5 from '@/views/menu5'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			redirect: '/menu2',//路由重定向
			children:[ //路由嵌套
				{
					path: '/menu1',
					name: 'Menu1',
					component: Menu1,
					redirect: '/menu1/tab1',
					children:[
						{
							path: '/menu1/tab1',
							name: 'Tab1',
							component: Tab1
						},
						{
							path: '/menu1/tab2',
							name: 'Tab2',
							component: Tab2
						},
						{
							path: '/menu1/tab3',
							name: 'Tab3',
							component: Tab3
						},
					]
				},
				{
					path: '/menu2',
					name: 'Menu2',
					component: Menu2
				},
				{
					path: '/menu3',
					name: 'Menu3',
					component: Menu3
				},
				{
					path: '/menu4',
					name: 'Menu4',
					component: Menu4
				},
                {
                    path: '/menu5',
                    name: 'Menu5',
                    component: Menu5
                }
			]
		}
	]
})
