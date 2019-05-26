<template>

    <div class="mui-numbox" data-numbox-min="1" >
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"  ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

</template>

<script>
    import mui from "../../lib/mui/js/mui.min.js";

    export default {
        data(){
            return{
            }
        },
        mounted() {
            // 初始化数字选择框组件
            mui(".mui-numbox").numbox();
        },
        props:["num"],
        watch:{
            //属性监听
            num:function (newVal,oldVal) {
                mui(".mui-numbox").numbox().setOption('max',newVal)
            }
        }
    };
</script>

<style lang="scss" scoped>
    .mui-numbox{
        height: 25px;
    }

    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
</style>
