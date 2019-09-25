<template>
  <div>
    <div id="myOrder">
      <!-- 内容详情 -->
      <garen-loadmore
        @top-method="handleTop"
        ref="vueLoad"
        :top-change-text="topChangeText"
        @top-status-change="handleStatusChange"
        @bottom-method="handleBottom"
        @bottom-status-change="handleBottomStatusChange"
        @bottom-error-click="handleBottomError"
        :disable-top="false"
        :disable-bottom="false"
      >
        <div id="order_content">
          <ul>
            <li v-for="(item, index) in lists" :key="index">
              <p>{{item.room_name}}</p>
              <div class="li_img"><img v-lazy="item.room_src" alt=""></div>
            </li>
          </ul>
        </div>
      </garen-loadmore>
    </div>
  </div>
</template>
<script>
import { getList } from "../../apis/path1";
export default {
  name: "myOrder",
  data() {
    return {
      tabId: 1, // 控制导航切换
      datas: [],
      isIframe: false, // 弹框
      isjaizia: false, // 加载
      page: 1, // 当前页数
      moreList: [], // 下拉加载存储信息
      isLoading: true, //
      // 提示文案示例
      topChangeText: {
        pulling: "下拉刷新",
        limit: "释放刷新",
        loading: "正在刷新...",
        complete: "  " // 刷新完成暂不提示
      },
      shopId: "",
      lists: []
    };
  },
  mounted() {
    this.getLists(0);
    // }
  },
  methods: {
    // 跳转详情
    ToDetails(id) {
      // this.$router.push("/myOrderDetails");
      this.$router.push("/myOrderDetails?order_id=" + id);
      localStorage.shopId = id;
    },
    //
    async getLists(a) {
      const lists = await getList({
        offset: a,
        limit: 30
      });
      // console.log(lists)
      this.lists = lists.data.data;
    },

    handleTop() {
      // 下拉刷新
      // 定时器用来模拟下拉刷新接口延迟时间
      // alert(2)
      setTimeout(() => {
        var that = this;
        // 模拟数据更新
        that.page++;
        that.getLists(that.page);
        // 数据跟新完调用该方法使garen-loadmore滚到顶部，参数是完成状态等待时间ms
        that.$refs.vueLoad.onTopLoaded(0);
      }, 1000);
    },
    handleStatusChange(status) {
      // status监控下拉刷新状态--等待/下拉/到达阙值/刷新/刷新完成
      const TOPSTATUS = {
        wait: "wait",
        pulling: "pulling",
        limit: "limit",
        loading: "loading",
        complete: "complete"
      };
      console.log(status, "statuschange");
    },
    handleBottomStatusChange(status) {
      // status监控上拉加载状态--等待/加载/没有更多数据/数据请求出错
      const BOTTOMSTATUS = {
        wait: "wait",
        loading: "loading",
        nodata: "nodata",
        error: "error"
      };
      console.log(status, "bottomchange");
      // this.handleBottom()
    },
    async handleBottom() {
      // 上拉加载
      // 定时器用来模拟上拉加载接口延迟时间
      // setTimeout(() => {
      // 模拟数据更新
      // this.list.push(1, 2, 3,4,4,5,6,7);
      /**
       *  数据跟新完调用该方法使数据加载中提示消失
       *  注意:如果没有更多数据参数传false
       *  this.$refs.vueLoad.onBottomLoaded(false)
       *  注意:如果数据请求错误可调用错误处理状态
       *  this.$refs.vueLoad.onBottomError()
       * 
       */
      // console.log(1)
      // if (this.isLoading === true) {
      //   return false;
      // }
      console.log(2)
      this.isLoading = true;
      var _vm = this;
      this.page++;
      // this.getLists(this.page)
      const lists = await getList({
        offset: this.page,
        limit: 30
      });
      if (lists.data.data.length == 0) {
        self.noData = "没有更多数据";
        done();
        return;
      }
      lists.data.data.forEach(element => {
        this.lists.push(element);
      });
      _vm.$refs.vueLoad.onBottomLoaded();
      // }, 2000);
    },
    // 如果是错误状态，点击从新请求数据
    handleBottomError() {
      this.handleBottom();
    }
  }
};
</script>
<style lang="scss" scoped>
#myOrder {
  position: relative;
  background-color: #f5f4f4;
  height: 100vh;
  overflow: hidden;
  #order_content {
    ul {
      li {
        text-align: center;
        .li_img {
          height: 200px;
          width: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
