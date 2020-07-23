<template>
<div class="title">
    <!-- 头部 -->
    <van-row class="top" type="flex" justify="space-between">
        <van-col span="5">
            <img class="logo" src="../../assets/static/images/logo.png" />
        </van-col>
        <van-col @click="toSearch" span="15" class="search">
            <van-icon name="search" size=".4rem"/>
            <span>搜索商品,共34099款好物</span>
        </van-col>
        <van-col span="3">
            <van-button class="loginBtn" type="primary" size="mini" @click="toLogin">登录</van-button>
        </van-col>
    </van-row>

    <!-- 导航标签swipeable -->
    <van-tabs   class="tabBtnWrap">
        <van-tab title="推荐">
             <Recommend ></Recommend>
        </van-tab>
        <van-tab v-for="(navItem,index) in indexNavList" 
            :title="navItem.name"
            :key="index"
            
        >
            <CateList></CateList>
        </van-tab>
    </van-tabs>
    
    <!-- <div >
         @click="changeNavId(0)"
        @click="changeNavId(index+1)"
        <Recommend v-if="navId === 0"></Recommend>
        <CateList v-else :navId='navId'></CateList>
    </div> -->

    <!-- 内容区 -->
    <!-- <div class='cateContainer'>	
		
	</div> -->

    

    <Footer></Footer>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {reqIndexList,reqIndexOtherList} from '../../api/index'
import Footer from '../../components/Footer/footer'
import Recommend from '../../components/recommend/recommend'
import CateList from '../../components/cateList/cateList'
import BScroll from 'better-scroll'


// 修改样式
import '../../assets/reset/reset.css'

export default{
    
    name:'Index',
    data(){
        return {
            msg:'123',
            // active:'',
            navId:0,
            kingKongList:[], //主页数据
            indexNavList:[], //导航数据
        }
    },
    components:{
        Footer,
        Recommend,
        CateList
    },
    async mounted(){
        const result = await reqIndexList()
        // console.log(result.data.data)
        this.kingKongList = result.data.data.kingKongModule.kingKongList

        const result1 = await reqIndexOtherList()
        this.indexNavList = result1.data.data

    },
    methods:{
        
        // 跳转到search界面
        toSearch(){
            // console.log('123')
            this.$router.push('/search')
        },
        // changeNavId(){
        //     this.navId = navId
        // }
        toLogin(){
            this.$router.push('/login')
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
/* .title{
    padding: .21333rem  0 .21333rem 0;
} */
.top{
    padding: 0.2rem;
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
    /* padding: 0 .2rem; */
}


</style>
