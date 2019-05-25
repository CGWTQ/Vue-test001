<template>
    <div class="goodslist-container">
        <router-link :to="'/home/shoppingInfo/' + item.id" class="goods-item"v-for="item in List" :key="item.id" tag="div">
            <img :src="item.src" alt="魅族16s">
            <h1 class="title" >{{ item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.new}}</span>
                    <span class="old">￥{{ item.old }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.repertory }}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>

</template>

<script>
    import { Toast } from "mint-ui";
    export default {
        data(){
            return{
                "List":[],
            }

        } ,
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){

                this.$http.get("http://localhost:3000/src/components/Data/goodsList.json").then((result) => {
                    if(result.body.status == 0){
                        this.List = result.body.result.list;
                    }else {
                        Toast("商品获取失败");
                    }
                })
            },
            getMore(){
                Toast("该功能正在开发中！")
            }
        }
    }
</script>

<style lang="scss" scoped>
.goodslist-container{
    background-color: white;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            min-height: 180px;
            width: 100% ;
        }
        .title{
            font-size: 14px;
        }
    }
    .info{
        background-color: #eee;
        p{
            margin: 0;
            padding: 5px;
        }
        .price{
            .now{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
            }
        }
        .sell{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
    }
}
</style>