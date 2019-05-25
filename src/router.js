import VueRouter from 'vue-router'
// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/VipContainer.vue'
import ShopcarContainer from './components/tabbar/ShoppingcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newlist from './components/news/newlist.vue'
import NewsInfo from './components/news/newsInfo.vue'
import images from './components/photos/images.vue'
import imageAll from './components/photos/imgInfo/imageAll.vue'
import shop from './components/goods/goodslist.vue'
import goodsInfo from './components/goods/goodsInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/vip', component: MemberContainer },
        { path: '/shoppingar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newlist', component: newlist },
        // { path: '/home/newsInfo', component: NewsInfo },
        { path: '/home/newsInfo/:id', component: NewsInfo },
        { path: '/home/images', component: images },
        { path: '/home/images/imagesAll', component: imageAll },
        { path: '/home/shop', component: shop },
        { path: '/home/shoppingInfo/:id', component: goodsInfo },

    ],
    linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router