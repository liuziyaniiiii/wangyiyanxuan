<template>
  <div class="buyContainer">
     <!-- 头部 -->
      <div class="buyTop">
          <div class="buyRow">
              <van-icon @click="toIndex" name="wap-home-o" />
              <div class="text">
                  值得买
              </div>
              <div class="right">
                <van-icon class="search" name="search" />
                <van-icon name="shopping-cart-o" />
              </div>
          </div>
      </div>
      <!-- 中间区域 -->
      <div class="centerContainer">
          <div class="centerTitle">
              <img class="topImg" src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
              
              <img class="floorImg" src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
              <div class="centertext">严选好物 用心生活</div>
          </div>
        <!-- 上面的轮播部分 -->
          <div class="centerSwiper">
              <van-swipe class="my-swipe"  indicator-color="white">
                <van-swipe-item>
                    <div class="centerContent" v-for="(item,index) in buyListsData" :key="index">
                          <img :src="item.picUrl" alt="">
                          <p class="dec">{{item.mainTitle}}</p>
                          <p class="down">{{item.viceTitle}}</p>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="centerContent" v-for="(item,index) in buyListsData" :key="index">
                          <img :src="item.picUrl" alt="">
                          <p class="dec">{{item.mainTitle}}</p>
                          <p class="down">{{item.viceTitle}}</p>
                    </div>
                </van-swipe-item>
            </van-swipe>     
          </div>
      </div>

      <Footer></Footer>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import {reqBuyLists} from '../../api/index'

import '../../assets/reset/reset.css'
import Footer from '../../components/Footer/footer'
export default {
    name:'Buy',
    data(){
        return{
            buyListsData:[]
        }
    },
    async mounted(){
        // this.$nextTick(()=>{
        //     this.buyScroll()
        // })
        let result = await reqBuyLists()
        // console.log(result.data.data.data.navList)
        this.buyListsData = result.data.data.data.navList.splice(0,8)
    },
    methods:{
        toIndex(){
            this.$router.push('/')
        },
        
    },
    components:{
        Footer
    }
}
</script>

<style scoped>
/* .buyContainer{
    background-color: #eee;
} */
.buyTop{
    height: 100px;
    background-color: #fbfbfb;
    padding: 0 8px 0 12px;
    border-bottom: 1px solid #333;
}
.buyRow{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding-top: .2rem
}
.buyRow .text{
    width: 172px;
    height: 54px;
    font-size: 0.5rem;
    /* font-weight: 600; */
    /* font-family: cursive; */
}
.buyRow .right  .search{
    margin-right: .26667rem
}
/* 中间区域 */
.centerContainer{
    width:100%;
    height: 685px;
    background: #eee;
    position: relative;
}
.centerTitle{
    position: absolute;
    left:0;
    top:0;
}
.centerTitle .centertext{
    position: absolute;
    left: 23%;
    top:115px;
    color: #fff;
    font-size: .4rem;
}
.centerTitle .floorImg{
    display: block;
    width: 100%;
    height:100%
}
.centerTitle .topImg{
    position: absolute;
    width: 2rem;
    height: auto;
    top: 1.12rem;
    left: .24rem;
    /* z-index: 2 */
}
.centerSwiper{
    width:710px;
    height: 500px;
    border-radius: 0.32rem;
    background:#fff;
    z-index: 3;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(2.1rem);
}
/*滑动区域*/

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
    display: flex;
    flex-wrap: wrap;
  }
.centerContent{
    display: flex;
    flex-direction: column;
    
    margin:0 auto;
    margin-top: 20px;
}
.centerContent img{
    display: block;
    width:120px;
    height: 120px;
    border-radius: 50%;
}
.centerContent .dec{
    display: block;
    font-family: 'PingFang-SC-Bold';
    font-weight: bold;
    font-size: .4rem;
    width: 1.68rem;
    height: .4rem;
    white-space: nowrap;
    overflow: hidden;
    color: #333333;
    text-align: center;
    line-height: .4rem;
    margin-top: .2rem;
}
.centerContent .down{
    width: 2rem;
    margin-top: .3rem;
    font-family: 'PingFangSC-Regular';
    font-size: .2rem;
    color: #999999;
    text-align: center;
    height: .3rem;
    line-height: .3rem;
    white-space: nowrap;
    overflow: hidden
}
</style>