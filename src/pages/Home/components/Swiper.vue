<template>
<!-- 首页轮播图 -->
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if='showSwiper'>
            <swiper-slide v-for='item of list' :key='item.id' >
                <img
                    class="swiper-img"
                    :src="item.imgUrl"
                />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props:{
        list:Array
    },
    name: "HomeSwiper",
    data() {
        return {
            swiperOptions: {
                pagination: ".swiper-pagination", //小圆点
                loop:true //循环滚动代码
            },
        };
    },
    computed:{
        showSwiper(){
            return this.list.length  //判断如果是0这为false 不显示
        }
    }
};
</script> 

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
         background:#fff
    .wrapper
        width: 100%
        overflow: hidden
        height: 0
        padding-bottom: 30.25%
    // 或者直接用高30vw
    .swiper-img
        width: 100%
</style>