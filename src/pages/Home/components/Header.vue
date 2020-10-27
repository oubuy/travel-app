<template>
    <!-- 头部组件搜索城市 -->
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe692;</span>

            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
         {{ this.doubleCity}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
        <!-- <router-link to='/list' >我是列表页</router-link> -->
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: "HomeHeader",
    computed:{
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
};


// 1rem=html font-size=50px 因为是2倍图(750px)，所以设计稿高度是86px,实际上是43px。0.86rem*50=43px（86/2/50=86/100）巧妙转化
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
    display: flex
    line-height:$headerHeight
    background: $bgColor
    color: #fff

    .header-left
        width: 0.64rem
        float: left
    .back-icon
        text-align: center
        font-size: 0.4rem
    .header-input
        border-radius: 0.1rem
        margin-top: 0.12rem
        height: 0.64rem
        line-height: 0.64rem
        margin-left: 0.2rem
        padding-left: 0.2rem
        background: #fff
        flex: 1
        color: #ccc
    .header-right
        min-width: 1.04rem
        padding:0 .1rem
        float: right
        text-align: center
        color:#fff
        .arrow-icon
            margin-left: -0.04rem
            font-size: 0.24rem
</style>
