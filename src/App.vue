<template>
  <div id="app">
      <!-- keep的用法是如果我的路由被加载一次就放在内存之中,
      下一次加载从内存取出不需要渲染函数  表示所有路由组件都做了缓存, exclude除了detail不做缓存-->
    <keep-alive exclude='Detail'>
    
        <router-view />
    </keep-alive>

  <!-- <router-view /> -->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {}

</style>
