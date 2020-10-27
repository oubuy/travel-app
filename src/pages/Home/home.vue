<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
        <!-- <router-link to='/list' class="hello">我是列表页</router-link> -->
    </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            //   city: "",
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ""
        };
    },
    computed: {
        ...mapState(["city"])
    },
    methods: {
        getHomeInfo() {
            //    axios.get('/api/index.json').then(this.getHomeInfoSucc)
            // api相当于代理http://localhost:8080/static/mock
            axios
                .get("api/index.json?city=" + this.city)
                .then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            console.log(res);
            res = res.data;
            if (res.ret && res.data) {
                //   this.city=res.data.city
                this.swiperList = res.data.swiperList;
                this.iconList = res.data.iconList;
                this.recommendList = res.data.recommendList;
                this.weekendList = res.data.weekendList;
                console.log(this.weekendList);
            }
        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated() {
        console.log("activated");
        if (this.lastCity !== this.city) {
            this.lastCity =this.city
            this.getHomeInfo();
        }
    }
};
</script> 

<style lang="">
</style>