// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import app from './App.vue'

//配置路由
import VueRouter from 'vue-router'
//导入自用路由模块
import router from './router.js'

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-ui
import { Header, Swipe, SwipeItem , Button, Lazyload } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button);
Vue.use(Lazyload);

//应用路由模块
Vue.use(VueRouter);
Vue.use(Vuex);

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//当每次进入网站，获取本地信息
var car = JSON.parse(localStorage.getItem("car") || '[]');

//创建Vuex store
var store = new Vuex.Store({
    state:{     //this.$store.state.***
        car:car  //{id:商品的id, count:商品的数量, price:商品的价格, selected:false}
    },
    mutations:{   //this.$store.commit('方法名','按需传入唯一的参数')
        addToCar(state,goodsinfo){

            var flag = false;

            state.car.some(item => {
                if(item.id === goodsinfo.id){
                    item.count += parseInt(goodsinfo.count) ;
                    flag = true;
                    return true
                }
            })

            if(flag === false){
                state.car.push(goodsinfo);
            }
            //将car数组存储在本地
            localStorage.setItem("car",JSON.stringify(state.car));
        }
    },
    getters:{     //this.$store.getters.***
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        }
    }
})



Vue.component(Header.name, Header);
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,  //挂载路由
    store   //挂载Vuex store
});


