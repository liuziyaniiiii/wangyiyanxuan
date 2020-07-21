<template>
    <van-tabbar v-model="active" route active-color="#DD1A21" inactive-color="#000">
        <van-tabbar-item class="vantabbarItem" name="home" icon="wap-home-o" replace to="/">首页</van-tabbar-item>
        <van-tabbar-item class="vantabbarItem" name="search" icon="notes-o" replace to="/search">分类</van-tabbar-item>
        <van-tabbar-item class="vantabbarItem" name="friends" icon="debit-pay">值得买</van-tabbar-item>
        <van-tabbar-item class="vantabbarItem" name="setting" icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item class="vantabbarItem" name="setting" icon="manager-o" replace to="/personal">个人</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import '../../assets/reset/reset.css'
export default {
    name:'Footer',
    data(){
    return {
      active: 0,
    }
  }
}
</script>

<style  scoped>

</style>>

