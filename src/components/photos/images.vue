<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" >
                        全部
                    </a>
                    <a class="mui-control-item" >
                        美女
                    </a>
                    <a class="mui-control-item" href="#item3mobile" >
                        汽车
                    </a>
                    <a class="mui-control-item" href="#item4mobile" >
                        科技
                    </a>
                    <a class="mui-control-item" href="#item5mobile" >
                        清新
                    </a>
                </div>
            </div>
        </div>

        <ul>
            <li >
                <h1>图片分享</h1>
            </li>
        </ul>
    </div>


</template>

<script>
    /* 注意：这里需要解除严格模式   https://github.com/genify/babel-plugin-transform-remove-strict-mode */
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
       data(){
           return{}
       },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
             })
        },
    }

</script>

<style scoped>
    *{
        touch-action: pan-y;
    }

</style>