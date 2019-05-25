<template>
    <div class="goodslist-container">
        <div class="goods-item"v-for="item in List" :key="item.id">
            <img :src="item.src" alt="魅族16s">
            <h1 class="title" >{{ item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.new}}</span>
                    <span class="old">￥{{ item.old }}</span>L
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.repertory }}件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    export default {
        data(){
            return{
                "List":[],
                "list":[
                    { "id":0,"src": "http://img.alicdn.com/bao/uploaded/i1/1695308781/O1CN01J07Lf22EjkNEcq4p2_!!1695308781.jpg","title":"Meizu/魅族 16s","new":"2999","old":"3198","repertory":999,"content":""},
                    { "id":1,"src":"http://img.alicdn.com/bao/uploaded/i4/TB1E3khhYrpK1RjSZTEC_.WAVXa_021523.jpg" ,"title":"Huawei/华为 Mate 20","new":"3999","old":"4199","repertory":99,"content":""},
                    { "id":2,"src":"http://img.alicdn.com/bao/uploaded/i3/TB113uCb13tHKVjSZSgaxx4QFXa_113422.jpg" ,"title":"OPPO Reno","new":"2999","old":"3099","repertory":158,"content":""},
                    { "id":3,"src":"http://img.alicdn.com/bao/uploaded/i7/TB1q0rVMwHqK1RjSZFEZE3GMXXa_100615.jpg" ,"title":"Xiaomi/小米 黑鲨游戏","new":"3269","old":"3399","repertory":100,"content":""},
                    { "id":4,"src":"http://img.alicdn.com/bao/uploaded/i6/TB1ZsyeikOWBuNjSsppZJtPgpXa_015433.jpg" ,"title":"Huawei/华为 P20","new":"2688","old":"2999","repertory":854,"content":""},
                    { "id":5,"src":"http://img.alicdn.com/bao/uploaded/i1/TB1b1BSmkzoK1RjSZFlT2ii4VXa_104624.jpg" ,"title":"honor/荣耀 荣耀magic 2","new":"3999","old":"4199","repertory":1000,"content":""},
                    { "id":6,"src":"http://img.alicdn.com/bao/uploaded/i7/TB1_0P1Mq6qK1RjSZFmYzF0PFXa_103933.jpg" ,"title":"Xiaomi/小米 Redmi 7","new":"999","old":"1099","repertory":2000,"content":""},
                ]
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