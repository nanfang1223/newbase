<template>
  <div id="app">
     <div class="one">
        <div class="item">
            <span class="item1"></span><span class="item2">功能异常：功能故障或不可用</span>
        </div>
        <div class="item">
            <span class="item1"></span><span class="item2">产品建议：用的不爽，我有建议</span>
        </div>
        <div class="item">
            <span class="item1"></span><span class="item2">其他问题</span>
        </div>
      </div>
    <div>
      <div
        v-for="index in 5"
        :key="index"
        :class="index <= indes ? 'active' : ''"
        @click="indes = index"
      >{{ index }}</div>
    </div>账号：
    <input type="number" v-model="zh" class="input" autofocus="autofocus" id="inp"/>
    <br />密码：
    <input type="text" v-model="mm" class="input" />
    <br />
    <button @click="logins()">提交</button>
    <ul>
      <button id="btn" @click="clicks()">点击</button>
      <li>3</li>
      <!-- <button @click="adds()">点击</button> -->
    </ul>
    <button @click="$router.push('/vuexs')">govuex</button>
    <button @click="$router.push('/wangluoyouhua')">css标签bug小尝试</button>
    <button @click="$router.push('/imgyujiazai')">bili学习</button>
    <button @click="$router.push('/xiala')">下拉加载</button>
    <button @click="$router.push('/theTest')">下拉加载2</button>
    <button @click="$router.push('/swiper')">轮播</button>
    <button @click="$router.push('/qiantaoluyou')">嵌套路由</button>
    <button @click="$router.push('/biaodan')">biaodan</button>
    <button @click="$router.push('/copy')">复制</button>
    <button @click="$router.push('/swiper2')">无缝轮播图</button>
    <button @click="$router.push('/fzxiala')">封装下拉</button>
    <button @click="$router.push('/suanfa')">算法</button>
    <button @click="$router.push('/neiqian')">内</button>
    <button @click="$router.push('/vuehexin')">vue进一步学习</button>
    <button @click="$router.push('/es6')">es6</button>


    <div class="layui-progress">
      <!-- <div class="layui-progress-bar" lay-percent="10%"></div> -->
      <!-- vue常用插件 https://www.jianshu.com/p/050124929a18 -->
      <!-- https://www.jianshu.com/p/c4a87e1b4ef7  vue指令大全 -->
      <!-- https://www.jianshu.com/p/e555bc60b96b vue 小技巧 -->
      <div :class="status  ? 'sss' : 'sss c'"></div>
      <button @click="status = !status">dianji</button>
      <button>点击sass$width</button>
      <div class="hao">当你开始你的困难对你说离开你的开始你的快乐承诺</div>
      <!-- <input type="number" maxlength="11" /> -->

     <!-- https://www.jianshu.com/p/7c6e4d21bf77  面试题 -->
    </div>
  </div>
</template>

<script>
import { dataOne, beta } from "../apis/path1";
import store from "../store";
import { Toast } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      zh: "",
      mm: "",
      dd: "",
      status: true,
      widths: "100px",
      es: "我是谁谁是我",
      indes: 0
    };
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
        timestamp: Date.parse(new Date()) / 1000
      });
      store.commit("login", {
        account: this.zh,
        pw: this.mm
      });
    },
    clicks() {
      $('#inp').show();
      $("#inp").trigger("focus");
      console.log(1);
    }
    ///
    // adds() {
    //   const a = 8
    //   this.$store.commit('add',a)
    // }
    //////
  },
  mounted() {
    $("#inp").trigger("focus");
    // this.$layer.msg(1)
    // console.log(dd)
//     function load(){
//     var oInp = document.getElementById("inp");
//     if(oInp.autofocus != true){
//         oInp.focus();
//         alert(1)
//     }
//     alert(2)
// }
// document.addEventListener("load",load,false); 
var ua = navigator.userAgent.toLowerCase();
            if(/iphone|ipad|ipod/.test(ua)) {
                var btn = document.getElementById('btn');
                btn.addEventListener('touchstart', function() {
                    $('#inp').show();
                    document.getElementById('inp').focus();
                })
            } else if(/android/.test(ua)) {
               setTimeout(() => {
                 var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                document.getElementById("btn").dispatchEvent(e);
               },1000)
                // $('#btn').click(function() {
                //     $('#inp').show();
                //     $("#inp").trigger("focus");
                // })
            }
    var dd = {
      username: "oo",
      password: "ll"
    };
    const betas = beta(dd);
    console.log(betas);
    this.$toast("Hello world!");
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
      this.status = !this.status;
    }, 500);

    // console.log(i)
    // this.adds()
    // es10新特性测试
    // 1...将对象转化成数组  Object.entries
    var ob = { name: "张三", age: "18" };
    var arr = Object.entries(ob);
    //将数组转化成对象 fromEntries  需要保证数组的格式
    var obs = Object.fromEntries(arr);
    var arr = [["name", "里斯"], ["age", "20"]];
    var obss = Object.fromEntries(arr);
    // console.log(arr,obs,obss)

    //es6测试
    // let
    let a = 10;
    // let a = 20 (不允许重复申明,这样会报错)
    // const a = 10 (let 定义过,这里会报错)
    a = 20; //可以重复的赋值
    const b = 10;
    // const b = 20 (不允许重复申明,这样会报错)
    // b = 50 (const 不可以重新赋值)

    //
    // repeat  接受一个参数 参数就是重复这个字符串的次数
    var rep = "jsjsjsssa";
    var reps = rep.repeat(2);
    // console.log(reps,'res')

    //
    // includes 检测字符串查找的返回的参数是布尔值  可以传两个参数 第一个参数是查找的内容 第二个参数是从第几位开始查找  作用和indexof相似
    var inc = "你是谁谁是我";
    var incs = inc.includes("你", 4);
    // console.log(incs)

    // for....of 遍历字符串
    var strs = "";
    for (strs of "nanfang") {
      // console.log(strs)
    }
    // console.log(strs)
    //
    // arr.find() 数组查找
    // var finds = [1,3,2,1,1,1,1,2,3]
    // for (let index = 1; index < finds.length; index++) {
    //   console.log(finds.indexOf(finds[index]))
    //     if (finds.indexOf(finds[index]) == -1) {
    //       finds.find((val,index1,arr) => {
    //         if (finds[index] = val) {
    //           finds.splice(index1,1)
    //         }
    //       })
    //     }
    //   }
    ////模板字符串
    // `显示字符串:${this.es}`${主体}，其中主体可以是表达式、运算、对象属性还可以是函数，若是字符串将直接输出该字符串。
    // console.log(`显示字符串:${this.es}`)

    //含参数调用
    //
    // var fun = (e) => {
    //   console.log(e)
    // }
    // fun`哦豁`
    // fun('哦豁')

    ///为函数添加默认值
    var func = (name = "张三", age = "19") => {
      console.log(`我叫${name},今年${age}岁`);
    };

    // ...展开
    var arr = ["张三", "20"];
    var arrA = ["李四", "18"];
    var str = "this is a dog";
    var strArr = [...str];
    // console.log(...arr)
    //数组合并
    // console.log([...arr,...arrA])
    // var number = Math.sqrt(1)
    // console.log(parseInt(number)==number)
    // func(...arr)
    // var ss = [22,11,2,3,112,1]
    // console.log(ss.sort())
    //  var ab = prompt(22);

    var bb = () => {
      var m = 1;
      var b = 0;
      var a = prompt("请输入一个正整数：");
      a = parseInt(a);
      b = a + "="; /*b为字符串*/
      for (var i = 2; i <= a; i++) {
        if (a % i == 0) {
          m = i;
          a = a / i; /*得到a除以i后的正整数*/
          i = 2; /*令i从最小的质数开始*/
          b = b + m + "*"; /*一步步拼接字符串b*/
        }
      }
      b = b.substr(
        0,
        b.length - 1
      ); /*substr 方法返回一个从指定位置开始的指定长度的子字符串。字符串的位数是从0开始，故-1*/
      alert(b);
    };
    // bb()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.one{
    width:355px;
height:120px;
background:rgba(255,255,255,1);
border-radius:8px;
}
.item{
    display: flex;
}
.item1{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #496DF5;
}
.item2{
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:20px;
}
#app {
  font-size: 20px;
  .input {
    width: 300px;
    height: 50px;
  }
  .active {
    background-color: green;
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
  .hao {
    width: 5%;
    // height: calc(50%);
    // background: red;
    position: relative;
    border: 1px solid #cccccc;
    padding-top: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    // white-space: nowrap;
    // &::before {
    //   content: "";
    //   display: block;
    //   padding-top: 100%;
    // }
  }
}
</style>

