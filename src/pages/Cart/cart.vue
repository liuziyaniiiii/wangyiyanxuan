<template>
    <div class="cartContainer">
        <!-- 头部 -->
        <div class="cartTop">
            <span class="logo">购物车</span>
            <div class="cartRight">
                <span class="text">领券</span>
            </div>
        </div>
        <!-- 3个原点 -->
        <div class="cartCircle">
            <ul class="cartUl">
                <li class="cartli">
                    <van-icon name="circle" />
                    <span>30天无忧退货</span>
                </li>
                <li class="cartli">
                    <van-icon name="circle" />
                    <span>48小时快速退款</span>
                </li>
                <li class="cartli">
                    <van-icon name="circle" />
                    <span>满99元免邮费</span>
                </li>
            </ul>
        </div>
        <!-- cart的未登录页面 -->
        <div class="cartNoLogin">
            <div class="img"></div>
            <div class="noLoginBtn" @click="toLogin">登录</div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../../components/Footer/footer'
    export default {
        name: 'Cart',
        components: {
            Footer
        },
        methods:{
            toLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    /* 头部 */
    .cartTop {
        height: 1.17333rem;
        padding: 0 .4rem;
        line-height: 1.17333rem;
        text-align: center;
        /* background-color: #eee; */
        position: relative
    }

    .cartTop .logo {
        float: left;
        font-size: .48rem
    }

    .cartTop .cartRight {
        position: absolute;
        top: 0;
        right: .4rem;
        height: 1.17333rem;
        font-size: .4rem;
    }

    .cartTop .cartRight .text {
        line-height: .50667rem;
        color: #DD1A21
    }

    /* 3个原点 */
    .cartUl{
        display: flex;
        justify-content: space-between;
        height: .93333rem;
        padding: 0 .4rem;
        background: #eee;
        position: relative;
        z-index: 1
    }
    .cartUl .cartli{
        display: flex;
        align-items: center;
    }
    /* 购物车背景 */
    .cartNoLogin{
        position: absolute;
        top: -.66667rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto
    }
    .cartNoLogin .img{
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-left: 50%;
        transform: translateX(-1.7rem);
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp);
    }
    /* 购物车登录按钮 */
    .cartNoLogin .noLoginBtn{
        margin: auto;
        text-align: center;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #DD1A21;
        border-radius: .04rem
    }
</style>