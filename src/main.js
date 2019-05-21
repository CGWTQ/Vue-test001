// 入口文件
import Vue from 'vue'
import app from './App.vue'
//配置路由
import VueRouter from 'vue-router'
//导入自用路由模块
import router from './router.js'

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入Mint-ui
import { Header } from 'mint-ui';

//应用路由模块
Vue.use(VueRouter);






Vue.component(Header.name, Header);
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router  //挂载路由
});