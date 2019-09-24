<template>
  <div>
    <scroller
      class="myScroll"
      :on-infinite="infinite"
　　　　:on-refresh="refresh"
　　　　:noDataText="'上拉加载更多数据'"
　　　　loading-layer-color="red"
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
      this.pageSize++;
      // this.getLists(this.pageSize)
      const lists = await getList({
        offset: this.pageSize,
        limit: 30
      });
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
  }
};
</script>            
<style lang="scss" scoped>
.myScroll {
  max-height: 600px;
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