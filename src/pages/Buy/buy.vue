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

          <div class="centerSwiper">
              <div class="wrapper" ref="wrapper">
                  <div class="content" @click="buyScroll">


                    <van-grid  :column-num="3" :gutter="10">
                        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
                    </van-grid>
                    <van-grid  :column-num="3 " :gutter="10">
                        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
                    </van-grid>
                    <!-- <div class="centerContent">
                          <img src="../../assets/static/images/carts/emptyCart.gif" alt="">
                          <p>9.9超值</p>
                          <p>爆品定价直降</p>
                    </div> -->

                  </div>
              </div>
          </div>
          
      </div>

      <Footer></Footer>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import '../../assets/reset/reset.css'
import Footer from '../../components/Footer/footer'
export default {
    name:'Buy',
    mounted(){
        this.$nextTick(()=>{
            this.buyScroll()
        })
    },
    methods:{
        toIndex(){
            this.$router.push('/')
        },
        // 滑动
        buyScroll(){
            this.scrollWrap = new BScroll(this.$refs.wrapper,{
                mouseWheel: true,
                disableTouch: false,
                disableMouse: false,
                resizePolling: 0,
                click: true,
                scrollX: true,
                probeType: 3,
            });
        }
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
.centerSwiper .wrapper{
    display: flex;
}
.centerSwiper .wrapper .content{
    display: flex;
}
.centerSwiper .wrapper .content .centerContent img{
    display: block;
    width:120px;
    height: 120px;
}

</style>