<template>
    <div class="shopcar-container">
        <!-- 商品列表区域   -->
        <div class="goods-list" v-for="(item,i) in List" :key="item.id">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner" >
                        <mt-switch ></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="info">
                            <h1>{{ item.title}}</h1>
                            <p>
                                <span class="price">￥{{ item.new}}</span>
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
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
}
</style>