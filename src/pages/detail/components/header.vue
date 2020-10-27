<template>
    <div>
        <!-- router-link  to='/'返回首页 -->
        <router-link tag="div" class="header-abs" to="/" v-show='showAbs'>
        <!--  showAbs显示 -->
            <span class="iconfont header-abs-icon">&#xe624;</span>
        </router-link>

        <div class="header-fixed" v-show='!showAbs'
        :style="opacityStyle">
        <!--  :style="opacityStyle" 是动态绑定样式  -->

            <!--  !showAbs 非true 就是false   -->
            <router-link to="/" >
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailHeader",
    data(){
        return {
            showAbs:true, //默认显示   !showAbs 非true 就是false  
            opacityStyle:{
                opacity:0 //默认为0
            }
        }
    },
    methods: {
        handleScroll(){
            console.log(document.documentElement.scrollTop) //显示滚动的距离 输出scroolTop的值
           const top =  document.documentElement.scrollTop
            console.log(top)
            if(top>60 ){

                let Newopacity=top/140

               // 如果下拉的数值大于1,也就是Newopacity=140/140也就一直往下拉的时候会大于1,那么久强制让他等于1
                Newopacity=Newopacity>1 ? 1 :Newopacity

                this.opacityStyle={
                    opacity:Newopacity  //让opacity的值等于上面的
                }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll) //绑定一个window scroll事件  
        
    },
             //上面的window的是全局函数,其他页面也可以执行;一直计算数值需要配合生命周期销毁函数 deactivated
    deactivated(){
            window.removeEventListener('scroll', this.handleScroll)
    }
};

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position: absolute
    left: 0.2rem
    top: 0.2rem
    width: 0.8rem
    height: 0.8rem
    border-radius: 0.4rem
    background: rgba(0, 0, 0, 0.8)
    text-align: center
    line-height: 0.8rem
    .header-abs-icon
        color: #fff
        font-size: 0.4rem
.header-fixed
    z-index:2
    position: fixed
    // overflow: hidden
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 0.32rem
    .header-fixed-back
        position: absolute
        top: 0
        left: 0
        width: 0.64rem
        text-align: center
        font-size: 0.4rem
        color: #fff
</style>