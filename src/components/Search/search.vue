<template>
<div class="searchContainer">
    <van-row type="flex" justify="space-between">
        <van-col span="20">
            <van-field
                @input="inputVal"
                class="searchInput"
                v-model='searchInput_v'
                placeholder="好货内部价"
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
        <van-col span="3">
            <van-button class="cancel" type="primary" size="mini">取消</van-button>
        </van-col>
    </van-row>
</div>
</template>

<script>
export default{
    name:'Search',
    data(){
        return {
            searchInput_v:'',
            input_v:'',
            isClose:false
        }
    },
    watch:{
        input_v(){
            this.isClose = true
        }
    },
    methods:{
        inputVal(_v){
            // console.log(value)
            this.input_v = _v
        },
        clearSearch(){
            this.searchInput_v=''
            this.isClose = false
        }
    }
}
</script>

<style scoped>
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
    padding-bottom: 0;
    border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    line-height: .74667rem;
    border-radius: 4px;
    font-size: .37333rem;
}
</style>
