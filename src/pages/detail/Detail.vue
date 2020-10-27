<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>

        <detail-header></detail-header>

        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import axios from "axios";
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    // data() {
    //     return {
    //         list: [ {
    //                 title: "成人票",
    //                 children: [
    //                     {
    //                         title: "成人三馆联票",
    //                         children: [
    //                             {
    //                                 title: "成人三馆联票 - 某一连锁店销售"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         title: "成人五馆联票"
    //                     }
    //                 ]
    //             },
    //             {
    //                 title: "学生票"
    //             },
    //             {
    //                 title: "儿童票"
    //             },
    //             {
    //                 title: "特惠票"
    //             }
    //         ]
    //     };
    // }
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            list: []
        };
    },
    methods: {
        getDetailInfo () {
            //axios.get('/api/detail.json?id='+this.$route.params.id) 把id传进来的普通写法
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id //获取到这个路由的id
                }
            }).then(this.handleGetDataSucc);
        },
        handleGetDataSucc (res) {
            console.log(res);
            res = res.data;
            console.log(res);
            if (res.ret && res.data) {
                const data = res.data
                console.log(data)
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                console.log(data.gallaryImgs)
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
             
            }
        }
    },
//     methods: {
//     getDetailInfo () {
//       axios.get('/api/detail.json', {
//         params: {
//           id: this.$route.params.id
//         }
//       }).then(this.handleGetDataSucc)
//     },
//     handleGetDataSucc (res) {
//       res = res.data
//       if (res.ret && res.data) {
//         const data = res.data
//         this.sightName = data.sightName
//         this.bannerImg = data.bannerImg
//         this.gallaryImgs = data.gallaryImgs
//         this.list = data.categoryList
//       }
//     }
//   },
    mounted() {
        this.getDetailInfo();
    }
};
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
    color: red
</style>