<template>
  <div>vux
    <div @click="$router.push('/')">返回</div>
    <div>{{member}}</div>
    <div>{{userInfo.pw}}</div>
  </div>
  
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: 'Vuexs',
  data() {
    return {}
  },
  computed: {
    //getter获取
    ...mapGetters(['member']),
    //state获取
    ...mapState(['userInfo'])
  }
}
</script>