<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <!-- 分业分页圆点 1/2 分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array,
            default() {
                //  default是个函数,返回图片数组
                return [];
            }
        }
    },
    data() {
        return {
            swiperOptions: {
                pagination: ".swiper-pagination", //把class传进来
                paginationType: "fraction", //分页器样式是fraction
                observer: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                observeParents: true //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
            }
        };
    },
    methods: {
        //当点击黑边区域的时候会返回详情页,发送给banne的common-gallary接受
        handleGallaryClick() {
            this.$emit("close");
        }
    }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit // 取消swiper自带的overflow:hidden
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        // overflow:hidden 取消这个让分页器显示出来
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem // -1离开图片
</style>