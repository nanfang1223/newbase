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
    <button @click="$router.push('/wangluoyouhua')">css标签bug小尝试</button>
    <button @click="$router.push('/imgyujiazai')">  bili学习</button>
    <button @click="$router.push('/xiala')">  下拉加载</button>
    <button @click="$router.push('/theTest')">  下拉加载2</button>
    <button @click="$router.push('/swiper')">  轮播</button>
    <button @click="$router.push('/qiantaoluyou')"> 嵌套路由</button>
    <button @click="$router.push('/biaodan')"> biaodan</button>
    <button @click="$router.push('/copy')"> 复制</button>
    <button @click="$router.push('/swiper2')"> 无缝轮播图</button>
    
    
    <div class="layui-progress">
  <!-- <div class="layui-progress-bar" lay-percent="10%"></div> -->
  <!-- vue常用插件 https://www.jianshu.com/p/050124929a18 -->
  <!-- https://www.jianshu.com/p/c4a87e1b4ef7  vue指令大全 -->
  <!-- https://www.jianshu.com/p/e555bc60b96b vue 小技巧 -->
  <div :class="status  ? 'sss' : 'sss c'"></div>
  <button @click="status = !status">dianji</button>
  <button>点击sass$width</button>
</div>
  </div>
</template>

<script>
import {dataOne} from '../apis/path1' 
import store from '../store'
import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      zh: '',
      mm: '',
      dd: '',
      status: true,
      widths: '100px'
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
    // this.$layer.msg(1)
    // console.log(dd)
    this.$toast('Hello world!')
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
      // 1、可以通过git branch -r 命令查看远端库的分支情况
      // 2、从已有的分支创建新的分支(如从master分支),创建一个dev分支 git checkout -b name
      // 3、建立本地到远端仓库的链接 --这样代码才能提交上去 git push --set-upstream origin dev  //dev为创建分支的名字

      // git 添加成员  https://jingyan.baidu.com/album/546ae185f493701149f28ce3.html?picindex=1
      // git https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496

    }
    setInterval(() => {
      this.status = !this.status
    },500)

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
  .sss {
    $w: 200px;
    width: $w;
    height: 200px;
    background-color: red;
    transition: all 1s linear;
    &.c {
      // margin-top: 100px;
      margin: {
        top: 100px;
        left: 100px;
      }
      transition: all 1s linear;
    }
  }
}
</style>

