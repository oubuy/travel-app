<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id"      @click="handleCityClick(item.name)">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <!-- abcdefg列表  key代表abcd-->
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <!-- ref=key是指监听letter的值  -->
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                         @click="handleCityClick(innerItem.name)"
                    >{{ innerItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
    name: "CityList",
    props: {
        hot: Array,
        cities: Object,
        letter: String
    }, 
      computed:{
        ...mapState({currentCity:'city'})
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    methods: {
        //点西安西安会出来,点三亚三亚会出来
        handleCityClick (city) {
            console.log(city)
            //this.$store.dispatch('changeCity', city) vuex普通写法
            //高级写法
            this.changeCity(city) //把映射的city传进来
           this.$router.push('/') //点击后跳转到首页
      },
      ...mapMutations(['changeCity']) //有个Mutations叫做changeCity,然后把Mutations映射到这个组件changeCity的方法里面
    },
    watch: {
        letter() {
            //console.log(this.letter + "我是猪"); //通过watch监听letter的值,一但发生变化就打印
            if (this.letter) {
                //如果letter不为空则
                const element = this.$refs[this.letter][0];
                console.log(element);
                this.scroll.scrollToElement(element); //Bscroll方法把点的字母传进来
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc
.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
        line-height: 0.54rem
        background: #eee
        padding-left: 0.2rem
        color: #666
        font-size: 0.26rem
    .button-list
        overflow: hidden
        padding: 0.1rem 0.6rem 0.1rem 0.1rem
        .button-wrapper
            float: left
            width: 33.33%
            .button
                margin: 0.1rem
                padding: 0.1rem 0
                text-align: center
                border: 0.02rem solid #ccc
                border-radius: 0.06rem
    .item-list
        .item
            line-height: 0.76rem
            padding-left: 0.2rem
</style>
