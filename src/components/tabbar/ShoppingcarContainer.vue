<template>
    <div class="shopcar-container">
        <!-- 商品列表区域   -->
        <div class="goods-list" v-for="(item,i) in List" :key="item.id">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner" >
                        <mt-switch v-model="$store.getters.fetGoodsSelecte[item.id]"
                        @change="selectedChange(item.id,$store.getters.fetGoodsSelecte[item.id])"></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="info">
                            <h1>{{ item.title}}</h1>
                            <p>
                                <span class="price">￥{{ item.price}}</span>
                                <shopCarNumbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopCarNumbox>
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--  商品结算区域  -->

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getSum.count }}</span> 件，总价<span class="red">￥{{  $store.getters.getSum.amount  }}</span></p>
                    </div>
                    <mt-button type="danger" @click="getAll">去结算</mt-button>
                </div>
            </div>
        </div>

        <p>{{ $store.getters.fetGoodsSelecte }}</p>
    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    import shopCarNumbox from '../subcomponets/shopcar-numbox.vue'

    export default {
        data(){
            return{
                "List":[],
            }
        },
        created(){
           this.getNewsList();
        },
        methods:{
            getAll(){
                Toast("开发中！");
            },
            getNewsList(){
                this.$store.state.car.forEach(item =>this.List.push(item) )

                //this.phoneList = result.body.result.list[this.id];
                // var idarr = []
                // this.$store.state.car.forEach(item => idarr.push(item.id))
                //
                // this.$http.get("http://localhost:3000/src/components/Data/goodsList.json").then((result) => {
                //     if(result.body.status == 0){
                //         idarr.forEach(id => {
                //             if(id ==  result.body.result.list[id]){
                //                 this.List = this.List.concat(result.body.result.list[id]);
                //             }
                //         })
                //     }else {
                //         Toast("商品获取失败");
                //     }
                // })
            },
            remove(id,index){ //删除 store 中数据 和 当前页面渲染数组 List 中的数据
                this.$store.commit("remove",id);
                this.List.splice(index,1);

            },
            selectedChange(id,val){ //购物车选中按钮，改变同步最新状态
                this.$store.commit("updataSlected",{ id, selected:val });
                // console.log(id+'----'+val)
            }
        },
        components:{
            shopCarNumbox
        }
    }
</script>

<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    margin-bottom: 20px;
    .goods-list{
        img{
            margin: 10px 10px;
            width: 60px;
            height: 60px;
        }
        h1{
            margin-bottom: 10px;
            font-size: 14px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color:red;
                font-weight: bold;
            }
        }
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>