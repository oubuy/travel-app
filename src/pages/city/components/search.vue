<template>
    <div class="search">
        <input type="text"  v-model="keyword" placeholder="请输入城市名或拼音" class="search-input" />
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >{{ item.name }}</li>

                <!--如果list为0才显示 -->
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配的城市
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapMutations} from 'vuex'

export default {
    name: "CitySearch",
    props:{
          cities: Object,
    },
     data() {
        return {
            keyword: "",
            list: [],
            timer: null,
        };
    },
      computed: {
        hasNoData() {
            return !this.list.length;
        },
    },
      watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            // 如果list为空,那么已搜索的城市列表页面也刷新为空 输入了a然后删除a清空列表
            if (!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (
                            value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        },
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
    
     mounted() {
        //加入这个代码就可以滚动搜索出来的城市
        this.scroll = new Bscroll(this.$refs.search);
    },
};
</script>

<style lang="stylus" scoped >
@import '~styles/varibles.styl'
.search
    height: 0.72rem
    padding: 0 0.1rem
    background: $bgColor
    .search-input
        width: 100%
        box-sizing: border-box
        height: 0.62rem
        line-height: 0.62rem
        padding: 0 0.1rem
        text-align: center
        border-radius: 0.06rem
        color: #666
.search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
        line-height: 0.62rem
        padding-left: 0.2rem
        background: #fff
        color: #666
</style>