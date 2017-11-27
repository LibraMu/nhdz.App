<template>
  <div id="app">
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '@/components/bottom/bottom'
export default {
  name: 'app',
  components:{
    BottomNav
  }
}
</script>

<style>

*{
    padding:0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    font-style: normal;
}
html{
  font-size: 14px;
  font-family: '微软雅黑';
}
#app {
  max-width: 650px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
