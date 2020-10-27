<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-Alphabet :cities="cities" @change="handleLetterChange"></city-Alphabet>
    </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ""
        };
    },

    methods: {
        getCityInfo() {
            axios.get("api/city.json").then(this.handleGetCityInfoSucc);
        },
        //获取请求过来的json
        handleGetCityInfoSucc(res) {
            console.log(res);
            this.cities = res.data.data.cities;
            this.hotCities = res.data.data.hotCities;
            console.log(this.cities);
        },
        handleLetterChange(e) {
            console.log(e); //接受到了alphabet传过来的字母
            this.letter = e;
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>

<style lang="stylus" scoped ></style>
