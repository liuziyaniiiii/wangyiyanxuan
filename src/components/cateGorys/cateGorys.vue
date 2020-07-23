<template>
  <div>
    <div v-for="(wrapperItem,index) in scrollDatas.categoryModule" :key="index">
      <img class="wrapperImg" :src="wrapperItem.titlePicUrl" alt />

      <div class="wrapper" ref="wrapper">
        <div style="display:inline-flex">
          <div
            class="content"
            @click="categoryScroll"
            v-for="(item,index) in wrapperItem.itemList"
            :key="index"
          >
            <img :src="item.showPicUrl" alt />
            <p class="text">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { reqIndexList } from "../../api/index";
export default {
  name: "cateGorys",
  props: {},
  data() {
    return {
      scroll: null,
      scrollDatas: []
    };
  },
  async mounted() {
    
    let result = await reqIndexList();

    this.scrollDatas = result.data.data;
    this.$nextTick(() => {
      // 滑动
      this.categoryScroll();
      
    });
  },
  methods: {
    // 滑动
    categoryScroll() {
      this.$refs.wrapper.forEach(item => {
        // dom对象
        new BScroll(item, {
          mouseWheel: true,
          disableTouch: false,
          disableMouse: false,
          resizePolling: 0,
          click: true,
          scrollX: true,
          probeType: 3
        });
      });
    }
  }
};
</script>

<style scoped>
.wrapperImg {
  width: 750px;
  height: 370px;
}

.wrapper {
  display: flex;
}

.content {
  display: flex;
  flex-direction: column;
}
.content .text{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -wibkit-line-clamp:2;
  -wibkit-box-orient:vertical;
  white-space :pre-wrap;
}

.content img {
  width: 200px;
  height: 200px;
  margin-right: 20px;
  background: #eee;
}
</style>