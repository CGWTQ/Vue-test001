import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import ShoppingcarContainer from './components/tabbar/ShoppingcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path:'/',redirect:'/home' },
    { path:'/home',component:HomeContainer },
    { path:'/vip',component:VipContainer },
    { path:'/shoppingar',component:ShoppingcarContainer },
    { path:'/search',component:SearchContainer },
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router