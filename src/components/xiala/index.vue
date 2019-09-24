<template>
  <div>
    <div v-show="busy" class="message1">刷新中。。。</div>
    <div
      class="myScroll"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10">
      <ul>
        <li v-for="(item, index) in lists" :key="index">{{item.room_name}}</li>
      </ul>
      
    </div>
    <div v-show="showF" class="message">数据加载。。。</div>
  </div>
</template>

<script>
import { getList } from '../../apis/path1'
export default {
  data() {
    return {
      busy: '',
      pageSize: 0,
      lists: [],
      showF: false
    };
  },
  created() {},
  mounted() {
    this.getLists(0)
  },
  methods: {
    async loadMore() {
      this.busy = true;
      this.showF = true
      this.pageSize++;
      // this.getLists(this.pageSize)
      const lists = await getList({
        offset: this.pageSize,
        limit: 300
      })
      lists.data.data.forEach(element => {
        this.lists.push(element)
      });
      // this.lists = lists.data.data
      console.log(0);
      this.busy = false;
      this.showF = false
    },
    //获取列表信息
    async getLists(a) {
      const lists = await getList({
        offset: a,
        limit: 300
      })
      // console.log(lists)
      this.lists = lists.data.data
    }
  }
};
</script>
<style scoped lang='scss'>
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
.message {
  width: 100%;
  height: 10px;
  text-align: center;
}
.message1 {
   width: 100%;
  height: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>