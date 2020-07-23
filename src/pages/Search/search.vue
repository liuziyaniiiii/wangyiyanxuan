<template>
<div class="searchContainer">
    <!-- 搜索框 -->
    <van-row type="flex" justify="space-between">
        <van-col span="24">
            <van-field
                @input="inputVal"
                class="searchInput"
                v-model='searchInput_v'
                input-align="center"
                placeholder="搜索商品,共34323款好物"
                @keyup.enter='submit'
            >
            <!-- 插槽 搜索框放大镜 Icon -->
            <template v-slot:left-icon>
                <van-icon class="searchIcon" name="search" size=".4rem"/>
            </template>
            <!-- 清空搜索框 -->
            <template #button>
                <van-icon 
                    v-show="isClose"
                    @click="clearSearch"
                    name="close" 
                />
            </template>

            </van-field>
        </van-col>
    </van-row>

    <!-- 内容区 -->
    <div class="searchContent">
        <!-- 左侧导航 -->
        <div class="navLeft">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item 
                    v-for="(navItem,index) in navLeftList" 
                    :key="index" 
                    :title="navItem.name" />
            </van-sidebar>
        </div>
        <div class="searchRight">
            <div class="banner">
                <img src="https://yanxuan.nosdn.127.net/13b5104f7b382c46afd827a9733075bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
            </div>
            <van-grid :column-num="3">
                <van-grid-item 
                    v-for="(item,index) in rightContentList[0].categoryList" :key="index" 
                    :icon="item.bannerUrl" 
                    :text="item.name" />
            </van-grid>
        </div>
    </div>
    
    <Footer></Footer>
</div>
</template>

<script>
import{reqSearchList,reqCateLists} from '../../api/index'
import Footer from '../../components/Footer/footer'
export default{
    name:'Search',
    data(){
        return {
            searchInput_v:'',
            input_v:'',
            activeKey:'0',
            isClose:false,
            navLeftList:[],
            rightContentList:[]
        }
    },
    components:{
        Footer
    },
    watch:{
        input_v(){
            this.isClose = true
        }
    },
    async mounted(){
        const result = await reqSearchList()
        // console.log(result.data.data)
        this.navLeftList = result.data.data.categoryL1List

        // 右侧内容的数据
        const rightResult = await reqCateLists()
        // console.log(rightResult.data.data.splice(0,4))
        this.rightContentList = rightResult.data.data.splice(0,4)
    },
    methods:{
        // watch监听input有没有值
        inputVal(_v){
            // console.log(value)
            this.input_v = _v
        },
        clearSearch(){
            this.searchInput_v=''
            this.isClose = false
        },
        submit(){
            axios.get('http://localhost:9527/search',{
                params:{
                    key:this.input_v
                }
            })
            .then(_d =>{
                console.log(_d.data)
            })
        }
    }
}
</script>

<style scoped>
/* 搜索框 */
.searchContainer{
    padding: .2rem .4rem;
}
.cancel{
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
.searchInput{
    padding-top: 0;
    padding-left: .26667rem;
    padding-bottom: .26667rem;
    border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    line-height: .74667rem;
    border-radius: 4px;
    font-size: .37333rem;
}
/* 内容区 */
.searchContent{
    border-top: 1px solid #eee;
    margin-top: .26667rem;
    display: flex;
}
.searchRight{
    width:528px;
    height: 872px;
    /* background: pink; */
    padding: .4rem .4rem .28rem;
    height: 100%;
    overflow: hidden
}
.searchRight .banner{
    width:100%;
    height: 192px;
}
.searchRight .banner img{
    width:100%;
    height: 192px;
}
</style>
