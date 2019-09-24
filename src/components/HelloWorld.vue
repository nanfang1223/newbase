<template>
  <div id="app">
    账号：
    <input
      type="text"
      v-model="zh"
      class="input">
    <br/>
    密码：
      <input
      type="text"
      v-model="mm"
      class="input">
    <br/>
    <button @click="logins()">提交</button>
    <ul>
      <li>3</li>
      <!-- <button @click="adds()">点击</button> -->
    </ul>
    <button @click="$router.push('/vuexs')">govuex</button>
    <button @click="$router.push('/wangluoyouhua')">网络优化</button>
    <button @click="$router.push('/imgyujiazai')">  bili学习</button>
    <button @click="$router.push('/xiala')">  下拉加载</button>
    <button @click="$router.push('/theTest')">  下拉加载2</button>
  </div>
</template>

<script>
import {dataOne} from '../apis/path1' 
import store from '../store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      zh: '',
      mm: ''
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  // ,
  methods: {
    async logins() {
      const login = await dataOne({
        // send:this.Encrypt(JSON.stringify({
        //   account: 86 + this.zh,
        //   password: this.mm,
        //   code: 1,
        //   accounttype: 1,
        //   timestamp:Date.parse(new Date())/1000
        // }))
        account: this.zh,
        password: this.mm,
        code: 1,
        accounttype: 1,
        timestamp:Date.parse(new Date())/1000
      })
      store.commit('login',{
        account: this.zh,
        pw: this.mm
      })
    },
    ///
    // adds() {
    //   const a = 8
    //   this.$store.commit('add',a)
    // }
    //////
  },
  mounted() {
    for (let index = 0; index < 4; index++) {
      // const element = array[index];
    }
    // console.log(index)
    for (var i = 0; i < 4; i++) {
      // const element = array[index];
      //state 数据仓库
      //getter 用来获取数据
      //mutation 用来修改数据的 最好写的是同步函数
      //action 用来提交mutation  可以进行异步函数
      // npm install npm
      //new Vuex。store()
    }

    console.log(i)
    // this.adds()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#app {
  font-size: 20px;
  .input {
    width: 300px;
    height: 50px;
  }
}
</style>

