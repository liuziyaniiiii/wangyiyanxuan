<template>
  <div id="app">
	  <h1>App组件</h1>
    <p class="test1">text111</p>
    <p class="test2">text222</p>
  </div>
</template>

<script>

export default {
  name: 'App'
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.test1{
  /* 做适配 */
  width: 10rem;
  height: 100px;
  background: powderblue;
}
.test2{
  /* 无适配 */
  width:375px;
  height: 100px;
  background: pink;
}
</style>
