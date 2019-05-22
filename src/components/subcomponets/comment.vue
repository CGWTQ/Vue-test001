<template>
    <div class="cmt">

        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容" maxlength="120" ></textarea>
        <mt-button type="primary" size="large" @click="getCmt">发表评论</mt-button>
        <div class="cmt-list" v-for="(list,i) in cmt" :key="list.id">
            <div class="cmt-item">
                <div class="cmt-header">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ list.user }}&nbsp;&nbsp;发表时间：2019.5.20
                </div>
                <div class="cmt-body">
                    {{ list.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>

    import {Toast} from "mint-ui"
    export default {
        data(){
            return{
                id:7,
                content:'',
                cmt:[
                    {id:1,user:'李白',content:'十步杀一人，千里不留行'},
                    {id:2,user:'赵云',content:'我乃常山赵子龙'},
                    {id:3,user:'曹操',content:'另可我负天下人，不可天下人负我'},
                    {id:4,user:'路飞',content:'我是要成为海贼王的男人'},
                    {id:5,user:'公孙离',content:'红叶最多情，一舞寄相思'},
                    {id:6,user:'宫本武藏',content:'无敌的我又回来了'},
                    {id:7,user:'韩信',content:'到达胜利之前，无法回头'},
                ],
            }
        },
        methods:{
            getCmt(){
                var cm = this.content = document.querySelector('textarea').value;
                if(cm.trim().length == 0){
                    return Toast('评论不能为空！')
                }
                this.id++;
                console.log(this.content)
                var cmt = {
                    id:this.id,
                    user:"匿名用户",
                    content:this.content.trim()
                }
                this.cmt.unshift(cmt);
                document.querySelector('textarea').value = ""

            },
            getMore(){
                //接口原因未实现，逻辑思想：
                //  -1.使页码加一
                //  -2.再次调用获取评论事件
                Toast("该功能还在开发中！");
            },


        }
    }
</script>

<style lang="scss" scoped>
    .cmt{
       margin-top: 20px;
        margin-bottom: 100px ;
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px;
            .cmt-item{

                .cmt-header{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>