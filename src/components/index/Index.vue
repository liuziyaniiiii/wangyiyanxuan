<template>
<div class="title">
    <van-row type="flex" justify="space-between">
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
</div>
</template>

<script>
export default{
    name:'Index',
    data(){
        return {
            msg:'123'
        }
    },
    methods:{
        toSearch(){
            // console.log('123')
            this.$router.push('/search')
        }
    }
}
</script>

<style scoped>

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
.title{
    padding: .21333rem .4rem;
}
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
</style>
