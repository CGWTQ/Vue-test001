<template>
    <div class="desc-container">
        <h3>{{ phoneList.title }}</h3>
        <hr>
        <div class="descImage">
            <div class="desc-image" v-html="phoneList.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                phoneList:[],
                "id":this.$route.params.id,
            }
        } ,
        created(){
            this.getPhoneList();
        },
        methods:{
            getPhoneList(){
                this.$http.get("http://localhost:3000/src/components/Data/goodsList.json").then((result) => {
                    if(result.body.status == 0){
                        this.phoneList = result.body.result.list[this.id];
                    }else {
                        Toast("商品获取失败");
                    }
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
.desc-container{
    h3{
        text-align: center;
        color: #2aabd2;
        font-size: 16px;
        margin: 15px 0;
    }

}
</style>
<style lang="scss">
    .desc-container{
        ul{
            list-style: none;
        }
         img{
             width: 100%;
         }
    }
</style>