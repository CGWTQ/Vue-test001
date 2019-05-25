<template>
    <div class="news"  >
        <div >
            <h3 class="title" >{{ List.title }}</h3>
            <p class="subtitle">
                <span>{{ List.time }}</span>
                <span>点击：520次</span>
            </p>
            <hr>
            <div title="content" v-html="List.content"></div>
            <comment-box></comment-box>
        </div>

    </div>
</template>

<script>
    import comment from '../subcomponets/comment.vue'
    import { Toast } from "mint-ui";

    export default {
        data(){
            return {
                List:[],
                "id":this.$route.params.id-1,
            }
        },
        created(){
            this. getNewsList()
        },
        methods:{
            //业务逻辑与之前相同
            getNewsList(){

                this.$http.get("http://localhost:3000/src/components/Data/New.json").then((result) => {
                    if(result.body.status == 0){
                        this.List = result.body.result.list[this.id];
                    }else {
                        Toast("新闻获取失败");
                    }
                })
            },
        },
        components:{
            "comment-box":comment,
        }
    }
</script>

<style lang="scss" scoped>
    .news{
        padding: 0 4px;
        .title{
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 10px 0;
        }
        .subtitle{
            display: flex;
            color: skyblue;
            justify-content: space-between;
        }
    }

</style>