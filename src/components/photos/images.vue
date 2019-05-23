<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <router-link class="mui-control-item mui-active" to="/home/imagesAll" data-wid="tab-top-subpage-1.html">
                        全部
                    </router-link>
                    <router-link class="mui-control-item" to="/home/images/imagesAll" data-wid="tab-top-subpage-2.html">
                        美女
                    </router-link>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        汽车
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        科技
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        清新
                    </a>
                </div>
            </div>
        </div>
        <router-view></router-view>
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