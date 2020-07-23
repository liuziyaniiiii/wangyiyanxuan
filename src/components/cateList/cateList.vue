<template>
    <div class="cateListContainer">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/static/images/carts/emptyCart.gif" alt="">
            </van-swipe-item>
        </van-swipe>
        <p class="title">口碑好物</p>
        <p class="desc">口碑好物</p>
    </div>
</template>

<script>
    export default {
        name:'CateList'
    }
</script>

<style scoped>
.my-swipe{
    margin-bottom: .26667rem
}
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

/* 中间的标题 */
.title{
    display: block;
    text-align: center;
    font-size:.42667rem;
    color: #333;
    line-height:1;
}
.desc{
    display: block;
    text-align: center;
    margin-top: .21333rem;
    line-height: 1;
    color: #999;
    font-size: .32rem;
}
                                        
    
                                    
</style>