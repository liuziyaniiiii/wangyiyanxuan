<template>
    <div class="personalContainer">
            <div class="topContainer">
            <div class="topImg">
                <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
                <div class="topText">
                    <p class="yanxuan">严选用户988</p>
                    <p class="user">普通用户</p>
                </div>
            </div>
            <div class="money">
                <div class="myMoney">我的资产</div>
                <div class="other">
                    <div class="item">
                        <p class="price">¥ 0</p>
                        <p class="gift">回馈金</p>
                    </div>
                    <div class="item">
                        <p class="price">3</p>
                        <p class="gift">红包</p>
                    </div>
                    <div class="item">
                        <p class="price">3</p>
                        <p class="gift">优惠券</p>
                    </div>
                    <div class="item">
                        <p class="price">¥ 0</p>
                        <p class="gift">津贴</p>
                    </div>
                    <div class="item">
                        <p class="price"> 0</p>
                        <p class="gift">礼品卡</p>
                    </div>
                </div>
            </div>
        </div>

        <van-grid  :column-num="3">
            <!-- <van-grid-item v-for="value in 11" :key="value" icon="photo-o" text="文字" /> -->
            <van-grid-item icon="orders-o" text="我的订单" />
            <van-grid-item icon="calender-o" text="周六一起拼" />
            <van-grid-item icon="after-sale" text="售后服务" />
            <van-grid-item icon="envelop-o" text="邀请返利" />
            <van-grid-item icon="new-o"  text="优先购" />
            <van-grid-item icon="photo-o" text="积分中心" />
            <van-grid-item icon="diamond-o" text="会员俱乐部" />
            <van-grid-item icon="friends-o" text="地址管理" />
            <van-grid-item icon="passed"  text="账号安全" />
            <van-grid-item icon="phone-circle-o"   text="帮助与服务" />
            <van-grid-item icon="service-o"  text="意见反馈" />
        </van-grid>


        <Footer></Footer>
    </div>



</template>

<script>
    import Footer from '../../components/Footer/footer'
    export default {
        name: 'Personal',
        components: {
            Footer
        }
    }
</script>

<style scoped>
    .topContainer {
        width: 100%;
        height: 540px;
        background-image: url(http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp);
        position: relative;
    }

    .topContainer .money {
        width: 100%;
        height: 280px;
        background: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-5rem);
        bottom: 0
    }

    .topContainer .money .myMoney {
        width: 100%;
        height: 105px;
        margin-left: .4rem;
        border-bottom: .01333rem solid #D9D9D9;
        text-align: left;
        line-height: 105px;
        font-size: .37333rem;
    }

    .topContainer .money .other {
        padding: .4rem;
        display: flex;
        height: 160px;
    }

    .topContainer .money .other .item {
        flex: 1;
        font-size: .4rem;
    }

    .topContainer .money .other .item .price {
        display: block;
        text-align: center;
        margin-bottom: 20px;
    }

    .topContainer .money .other .item .gift {
        display: block;
        text-align: center;
    }

    .topImg {
        display: flex;
        position: absolute;
        left: 10%;
        top: 20%
    }

    .topImg img {
        width: 1.89333rem;
        height: 1.89333rem;
        border-radius: 50%
    }

    .topImg .topText {
        color: #fff;
        font-size: .48rem;
        /* position: absolute;
        left:50%;
        top:5% */
    }

    .topImg .topText .yanxuan {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden
    }

    .topImg .topText .user {
        display: block;
        margin-top: 20px;
    }
</style>