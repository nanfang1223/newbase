<template>
  <div>
    <scroller
      class="myScroll"
      :on-infinite="infinite"
　　　　:on-refresh="refresh"
　　　　:noDataText="'没有更多数据 T_T'"
　　　　loading-layer-color="#cccccc"
　　　　ref="myscroller">
      <!-- 项目内容 -->
      <ul>
        <li v-for="(item, index) in lists" :key="index">{{item.room_name}}</li>
      </ul>
    </scroller>
  </div>
</template>
<script>
import { getList } from "../../apis/path1";
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
  name: "dada",
  data() {
    return {
      pageSize: 0,
      lists: [],
      noData: ""
    };
  },
  methods: {
      //上拉加载更多数据
    async infinite(done) {
        // alert(1)
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2)//关闭加载动画
        });
        return;
      }
      let self = this;
      
      // this.getLists(this.pageSize)
      const lists = await getList({
        offset: this.pageSize,
        limit: 30
      });
      this.pageSize++;
      console.log(lists,'6')
      if (this.pageSize > 4) {
        lists.data.data.length = 0
      }
      if (lists.data.data.length == 0) {
        self.noData = "没有更多数据";
        done()
        return;
      }
      lists.data.data.forEach(element => {
        this.lists.push(element);
      });

      //   self.$refs.myscroller.resize();
      done();
    },
    //下拉刷新数据
    refresh: function() {
      this.pageSize++;
      this.getLists(this.pageSize)
      // console.log(111)
        this.timeout = setTimeout(() => {
          this.$refs.myscroller.finishPullToRefresh()//关闭加载动画
        }, 1500);
    },
    async getLists(a) {
      const lists = await getList({
        offset: a,
        limit: 30
      });
      // console.log(lists)
      this.lists = lists.data.data;
    }
  },
  mounted() {
    this.getLists(0);
    // console.log(this.$route.fullpath())
  }
};
</script>            
<style lang="scss" scoped>
.myScroll {
  height: 1200px!important;
  overflow-y: auto;
  ul {
    li {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
<style>
._v-container>._v-content>.loading-layer>.no-data-text[data-v-ecaca2b0] {
  height: 50px!important;
  line-height: 50px;
  font-size: 26px;
}
._v-container>._v-content>.loading-layer[data-v-ecaca2b0] {
  height: 50px!important;
  line-height: 50px;
}
</style>