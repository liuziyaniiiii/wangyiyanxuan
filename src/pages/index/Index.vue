<template>
<div class="title">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between" style="padding: 0 .2rem">
        <van-col span="5">
            <img class="logo" src="../../assets/static/images/logo.png" />
        </van-col>
        <van-col @click="toSearch" span="15" class="search">
            <van-icon name="search" size=".4rem"/>
            <span>搜索商品,共34099款好物</span>
        </van-col>
        <van-col span="3">
            <van-button class="loginBtn" type="primary" size="mini">登录</van-button>
        </van-col>
    </van-row>

    <!-- 导航标签 -->
    <van-tabs v-model="active" swipeable class="tabBtnWrap">
        <van-tab v-for="(navItem,index) in kingKongList" 
            :title="navItem.text"
            :key="index"
        >
            
        </van-tab>
    </van-tabs>
    
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item>
            <img src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://yanxuan.nosdn.127.net/8fc032ff23ba6ca2f1c6df71e08d7a5b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://yanxuan.nosdn.127.net/8d2a7fc9eab1e4d347002868a756d9e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
    </van-swipe>
    <!-- 中间三个区域 -->
    <div class="middle"> 
        <ul>
            <li>
                <i>
                    <img class="image" src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
                </i>
                网易自营品牌
            </li>
            <li>
                <i>
                    <img class="image" src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
                </i>
                30天无忧退货
            </li>
            <li>
                <i>
                    <img class="image" src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
                </i>
                48小时快速退款
            </li>
        </ul>
    </div>

    <!-- 10个 -->
    <div>
        <van-grid :column-num="5">
            <van-grid-item 
                v-for="(item,index) in kingKongList" 
                :key="index" 
                :icon="item.picUrl" 
                :text="item.text" 
            />
        </van-grid>
    </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {reqIndexList} from '../../api/index'

// import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)
// 修改样式
import '../../assets/reset/reset.css'

export default{
    name:'Index',
    data(){
        return {
            msg:'123',
            active:'',
            kingKongList:[]
        }
    },
    async mounted(){
        const result = await reqIndexList()
        // console.log(result.data.data)
        this.kingKongList = result.data.data.kingKongModule.kingKongList
    },
    methods:{
        ...mapActions({
            
        }),
        // 跳转到search界面
        toSearch(){
            // console.log('123')
            this.$router.push('/search')
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
.title{
    padding: .21333rem  0 .21333rem 0;
}
.logo{
    width:138px;
    height: 40px;
    margin-top: .1rem;
}
.loginBtn{
    /* width: .98667rem;
    height: .53333rem; */
    width:74px;
    height: 40px;
    line-height: 40rem;
    text-align: center;
    color: #DD1A21;
    border: 1px solid #DD1A21;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
    background: #ffffff;
    margin-top: .1rem;
}
/* 头部搜索条 */
.search{
    background: #ededed;;
    border-radius: .10667rem;
    height: .75rem;
    font-size: .37333rem;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #666;
}
/* 导航标签 */
.tabBtnWrap{
    font-size: .4rem;
    padding: 0 .2rem;
}
/* 轮播图 */
.my-swipe .van-swipe-item {
    color: #fff;
    height: 4rem;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    margin: 0 auto;
    /* background-color: #39a9ed; */
}
.my-swipe .van-swipe-item img{
    width:100%;
    height: 4rem;
}
/* 中间三个 */
.middle{
    background-color: #fff;
    padding-right:.21333rem ;
}
.middle ul{
    width: 100%;
    height: .96rem;
    padding: 0 .4rem;
    display: flex;
    align-items: center;
}
.middle ul li{
    flex: 1;
    float: left;
    /* background: #fff; */
    font-size: .32rem;
    color:#333;
    margin-left: .10667rem;
    line-height: .42667rem;
    display: inline-block;
    vertical-align: middle;
}
.middle ul li i{
    width:.42667rem;
    height: .42667rem;
    font-size: .32rem;
    color: #333;
    margin-left: .10667rem;
    line-height: .42667rem;
    display: inline-block;
    vertical-align: middle;
}
.middle ul li i .image{
    width:.42667rem;
    height: .42667rem;
}
/* 10个的图片放大有问题 */
.van-grid-item .van-grid-item__content .van-icon .van-icon__image{
    display: block;
    width: 1.46667rem;
    height: 1.46667rem
}
</style>
