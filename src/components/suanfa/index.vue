<template>
<div>算法</div>
</template>

<script>
export default {
data() {
return {

}
},
created() {

},
mounted() {
const arr  = [1,[1,2],[1,[2,3,[4,8]]]]
const arra = [1,[1,2,3]]
// 问题将arr的高维数组展开
// concat将一个数组或者是多个数组连接,并返回一个新的数组
const ftarr = (arr) => {
  return [].concat(...arr)
}

// console.log(ftarr(arra));//[1,1,2,3]
const ftarr1 = (arr) => { 
  return [].concat(
    ...arr.map( x => Array.isArray(x) ? ftarr1(x) : x)
  )
}
// 第一次递归  ...arr => 1,[1,2],[1,[2,3,[4,8]]]
// 


// console.log(Math.max(...ftarr1(arr)));///求数组的最大值
// console.log(ftarr1(arr).reduce((x,y) => x+y)); ///求数组的元素之和

// 最简单的数组去重
// const arrb = [1,1,1,1,2,4,5,6,6,5,6]
// console.log([...new Set(arrb)]);

// 
const arrc = [1,11,101,10001,11102]

const sorts = () => {

}
}
}
</script>
<style scoped lang='scss'>

</style>