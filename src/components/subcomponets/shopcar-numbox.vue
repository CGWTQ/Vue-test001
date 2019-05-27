<template>

    <div class="mui-numbox" data-numbox-min="1" >
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged"  ref="numbox" readonly/>
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
        methods:{
            countChanged(){
                // console.log(this.$refs.numbox.value)
                this.$store.commit("updataGoosInfo",{id:this.goodsid,count:this.$refs.numbox.value});
            }
        },
        props:["initCount","goodsid"]
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
