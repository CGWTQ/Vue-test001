<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
<!--            <li class="mui-table-view-cell mui-media" v-for=" item in newslist" :key=" item.id ">-->
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019.05.20</span>
                            <span>点击：100次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019.05.20</span>
                            <span>点击：100次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019.05.20</span>
                            <span>点击：100次</span>
                        </p>
                    </div>
                </a>
            </li>

        </ul>
    </div>

</template>

<script>
    var New = require('./New.json');
    var News = New.News;
    import { Toast } from "mint-ui";
    export default {
        data(){
            return{
                newslist:[]
            }
        },
        created(){
            // this.getNewsList();
        },
        methods:{
            getNewsList(){
                this.$http.get("/News").then((result) => {
                    if(result.body.status == 0){
                        console.log(1111)
                        // this.newslist = result.body.result.list;
                    }else{
                        Toast("加载新闻资讯失败。。。");
                    }
                });
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