<template>
    <div class="Icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl" alt />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    props: {
        list: Array
    },
    data() {
        return {
            swiperOptions: {
                autoplay: false //首页图标不要自动翻
            }
        };
    },

    computed: {
        pages() {
            const pages = [];
            //item是循环项目,index 是循环的下标[0]
            this.list.forEach((item, index) => {
                //当前下表对应的数据展示在第几面,用math算,超过8个就第二页
                const page = Math.floor(index / 8);
                console.log(page);
                if (!pages[page]) {
                    //如果不存在则
                    pages[page] = [];
                }
                //否则下表push到item里面
                pages[page].push(item);
            });
            return pages;
        }
    }
};
</script>







<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.Icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.Icons
    margin-top: 0.2rem
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        background: #fff
        padding-bottom: 25%
        border-radius: 4%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0.44rem
            box-sizing: border-box
            padding: 0.1rem
            .icon-imgcontent
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: 0.44rem
            line-height: 0.44rem
            color: $darkTextColor
            text-align: center
            ellipsis()
</style>