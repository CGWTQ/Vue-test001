<template>
    <div>
        <ul class="mui-table-view">

            <li class="mui-table-view-cell mui-media" v-for=" item in List" :key=" item.id ">

                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.pic">
                    <div class="mui-media-body">
                        <p>{{ item.title }}</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.time }}</span>
                            <span>点击：520次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>

</template>

<script>
    import { Toast } from "mint-ui";
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

                this.$http.get("http://localhost:3000/src/components/Data/New.json").then((result) => {
                    if(result.body.status == 0){
                        this.List = result.body.result.list;
                    }else {
                        Toast("新闻获取失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>