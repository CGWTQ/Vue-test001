<template>
    <div class="goodsinfo-container" >
        <!--  商品轮播图  -->
        <div class="mui-card" >
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                        <swiper :LunBoTuList="List" :isful="true"></swiper>
                </div>
            </div>
        </div>

        <!--  商品购买  -->
        <div class="mui-card">
            <div class="mui-card-header">商品标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span><del>市场价：</del></span>&nbsp;&nbsp;
                        <span class="now-price">销售价：</span>
                    </p>
                    <span>购买数量：</span>
                    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>

                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input id="test" class="mui-input-numbox" type="number" value="1" />
                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>
                    <p class="goodsinfo-btn">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>


        <!--  商品参数  -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="small">图文介绍</mt-button>
                <mt-button type="danger" size="small">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    import swiper from '../subcomponets/swiper.vue'
    import '../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return{
                List:[],
                "id":this.$route.params.id,
            }
        } ,
        created(){

            this.getimagesList();
        },
        methods:{
            getimagesList(){

                this.$http.get("http://localhost:3000/src/components/Data/images.json").then((result) => {
                    if(result.body.status == 0){
                        this.List = result.body.result.list[this.id].src;
                    }else {
                        Toast("商品获取失败");
                    }
                })
            }
        },
        components:{
            swiper
        }
    }
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now-price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-numbox{
        height: 25px;
    }
    .goodsinfo-btn{
        padding-top: 10px;
    }
}
</style>