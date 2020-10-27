<template>
  <div>
      <div class="item" v-for='(item,index) of list':key='index'>
      <div class="item-title border-bottom" >
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
       <div class="item-children" v-if='item.children'>
            <!--  name: 'DetailList', 其实这个名字很大的一个用处
            就是为了我们使用递归组件的时候
            来使用，假设一个组件要用自己的时候，那么我就可以通过自己的名字
            来使用自己，那怎么使用呢？  v-if如果我自身有children，
            我呢就把children当做例子。的一个循环放出来 
             组件的自身调用自己组件的自身
            -->
              <detail-list :list='item.children'></detail-list>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
 props:{
   list:Array
 }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem 
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
</style>
