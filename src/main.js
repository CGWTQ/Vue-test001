// 入口文件
import Vue from 'vue'
import app from './App.vue'

//导入MUI样式
import './lib/mui/css/mui.min.css'
//按需导入Mint-ui
import { Header } from 'mint-ui';

//test

Vue.component(Header.name, Header);
var vm = new Vue({
    el: '#app',
    render: c => c(app)
});