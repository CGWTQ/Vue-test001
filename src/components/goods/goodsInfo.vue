<template>
    <div class="goodsinfo-container" >
        <!--  购物车小球  -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

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
            <div class="mui-card-header">{{ phoneList.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span><del>市场价：￥{{ phoneList.old }}</del></span>&nbsp;&nbsp;
                        <span class="now-price">销售价：￥{{ phoneList.new }}</span>
                    </p>
                    <span>购买数量：</span>
                    <numbox :num="phoneList.repertory"></numbox>
                    <p class="goodsinfo-btn">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>


        <!--  商品参数  -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ phoneList.No }}</p>
                    <p>库存情况：{{ phoneList.repertory }}台</p>
                    <p>上架时间：{{ phoneList.time }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    import swiper from '../subcomponets/swiper.vue'
    import numbox from "../../components/subcomponets/goosinfo-numbox.vue"

    let count = 0; //记录购物车数量
    export default {
        data(){
            return{
                List:[],
                phoneList:[],
                id:this.$route.params.id,
                ballFlag:false, //控制小球隐藏显示
                selectedCount:1,

            }
        } ,
        created(){
            this.getimagesList();
            this.getPhoneList();
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
            },
            getPhoneList(){
                this.$http.get("http://localhost:3000/src/components/Data/goodsList.json").then((result) => {
                    if(result.body.status == 0){
                        this.phoneList = result.body.result.list[this.id];
                    }else {
                        Toast("商品获取失败");
                    }
                })
            },
            goDesc(id){
                //编程式导航跳转
                this.$router.push({name:"goodsDesc",params:{ id }});
            },
            goComment(){
                this.$router.push({name:"goodsComment"});
            },
            addToShopCar(){
                //添加到购物车
                this.selectedCount = parseInt(document.getElementById("test").value)
                this.ballFlag = !this.ballFlag;
                var goodsinfo = { id:this.id, count:this.selectedCount, price:this.phoneList.new, selected:true };

                this.$store.commit("addToCar",goodsinfo);




                // count=count+this.selectedCount
                // document.getElementById("badge").innerHTML = count;
            },
            /* 小球半场动画 */
            beforeEnter(el){
                el.style.transform="translate(0,0)";

            },
            enter(el,done){
                el.offsetWidth;

                // 解决小球动画在不同分辨率和页面滑动后不能准确落到购物车的问题
                //   - 1.先得到 购物车和小球 的坐标
                //   - 2.求 横纵 坐标差
                //   - 3.使用 getBoundingClientRect()

                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById("badge").getBoundingClientRect();

                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform=`translate(${xDist}px,${yDist}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.17,.67,.83,.67)";
                done();
            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag;
            },
            /******************/
        },
        components:{
            swiper,
            numbox
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
    .goodsinfo-btn{
        padding-top: 10px;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 385px;
        left: 150px;
    }
}
</style>