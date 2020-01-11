<template>
<div>
  <p>{{ obj }}</p>
  <p>{{ uu }}</p>
  <p>{{ newobj }}</p>
  <div v-if="boo">
    <span>1</span>
    <input type="text" key="1 ">
  </div>
  <div v-else>
    <span>2</span>
    <input type="text" key="2" v-model="uu">
  </div>
</div>
</template>

<script>
import { nextTick } from 'q'
export default {
data() {
return {
  obj: '',
  uu: 0,
  newobj: {},
  boo: false
}
},
created() {

},
mounted() {
   window.vue = this;
  // vue的一些方法
  // this.$el
  console.log(this.$el);
  // 数据源
  var obj = {
    name: 'jsj',
    age :18,
    news: {
      dd: 20
    }
  }
  this.obj = obj
// vue数据劫持 object.defineProperty
// this.newobj.address = 3
// 给对象添加新的属性
this.$set(this.newobj,'address',99)
const observer  = (obj) => {
  if (typeof(obj) == 'object') {
    for(let key in obj) {
      defineReactive(obj, key, obj[key])
    }
  }
}

// 
const defineReactive = (obj,key,value) => {
  // 回调
  observer(value)
  // 数据劫持
  Object.defineProperty(obj,key,{
    // 获取数据
    get() {
      console.log('get',value);
      return value
    },
    // 修改数据
    set(val) {
      // 如果修改的值也是一个对象,也需要回调一下
      observer(val)
      console.log('数据更新!' + val);
      value = val
    }
  })
}

observer(obj)
// obj.age = 20
// obj.news.dd = 99
// Object.defineProperpty是不支持数组的 所以vue数组上的所有方法都重写了
// 数组不能通过长度修改,也不能通过索引更改
obj.news = [1,2,3,4]

setTimeout(() => {
  obj.age = 20
  obj.news.push(9)
  console.log(1);
  obj.aa = 'ww3w'
  // this.obj = obj
  console.log(obj,'999');
  this.$forceUpdate()
  // this.uu = 2
},3000)

// 
// obj.aa = 'ww3w'
}
}
</script>
<style scoped lang='scss'>

</style>