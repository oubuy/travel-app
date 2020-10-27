<template>
    <div class="header">
        <ul class="list">
            <li
                class="item"
                v-for="item of letters"
                :key="item"
                :ref="item"
                @click="handleLetterClick"
                @touchstart.prevent="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
     data() {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            };
        },
        updated() {
            this.startY = this.$refs["A"][0].offsetTop;
        },
        computed: {
            letters() {
                const letters = [];
                for (let i in this.cities) {
                    letters.push(i);
                }
                return letters; //['A' 'B' 'C']
            }
        },
        methods: {
            handleLetterClick(e) {
                console.log(e.target.innerText); //打印出按的字母.然后传发给city.vue组件
                this.$emit("change", e.target.innerText); //传出cityfffff
            },

            handleTouchStart() {
                this.touchStatus = true;
            },
            handleTouchMove(e) {
                //性能函数节流,节省滑动的频率反应速度缩小
                if (this.touchStatus) {
                    if (this.timer) {//性能函数节流,节省滑动的频率反应速度缩小   用定时器做
                        clearTimeout(this.timer);
                    } //如果滑动了代码那么久显示滚动,如果又滑动那么取消上次的请求重新显示现在的
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - this.startY) / 20);
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit("change", this.letters[index]);
                        }
                    }, 16);
                }
            },
            handleTouchEnd() {
                this.touchStatus = false;
            }
        }
    
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: 0.4rem
    .item
        line-height: 0.4rem
        text-align: center
        color: $bgColor
</style>
