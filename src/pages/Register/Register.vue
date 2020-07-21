<template>
    <div class="registerContainer">
        <!-- 头部 -->
        <div class="registerTop">
            <div class="registerRow">
                <van-icon @click="toIndex" name="wap-home-o" />
                <div class="text">
                    网易严选
                </div>
                <div class="right">
                    <van-icon class="search" name="search" />
                    <van-icon name="shopping-cart-o" />
                </div>
            </div>
        </div>

        <div class="registerContent">
            <div class="img">
                <img class="image" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="pattern" label="手机号" placeholder="请输入手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]" />
                <van-field v-model="password" type="password" name="validator" label="密码" placeholder="请输入密码"
                    :rules="[{ validator, message: '密码不少于6位' }]" />
                <div style="margin: 16px;">
                    <van-button round block type="danger" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    import '../../assets/reset/reset.css'
    export default {
        name: 'Register',
        data() {
            return {
                username: '',
                password: '',
                pattern: /^1[3456789]\d{9}$/
            };
        },
        methods: {
            validator(val) {
                return /^\d{6}$/.test(val);
            },
            toIndex() {
                this.$router.push('/')
            },
            onSubmit(values) {
                console.log('submit', values);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .registerTop {
        height: 1.16rem;
        background-color: #fbfbfb;
        padding: 0 8px 0 12px;
        border-bottom: 1px solid #eeeeee;
    }

    .registerRow {
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        padding-top: .2rem
    }

    .registerRow .text {
        width: 172px;
        height: 54px;
        font-size: 0.55rem;
        font-weight: 600;
        font-family: cursive;
    }

    .registerRow .right .search {
        margin-right: .26667rem
    }

    /* 内容区图片 */
    .registerContent {
        background: #ffffff;
        height: 1246px;
        display: block
    }

    .registerContent .img {
        text-align: center;
        padding-top: 1.13333rem;
        padding-bottom: 1.09333rem;
        padding-right: 0.8rem
    }

    .registerContent .img .image {
        width: 3.57333rem;
        height: 1.2rem
    }
</style>