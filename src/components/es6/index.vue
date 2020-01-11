<template>
 <div>
   <p>{{arr1}}</p>
 </div>
</template>
<script>
import { get } from 'http';
export default {
  data() {
   return {
     arr1: []
   };
  },
  mounted() {
    // https://blog.csdn.net/qq_33429583/article/details/79700771 //H5封装桌面应用链接


    // 数组的解析
    const [data1, ...data2] = [1,2,3,4]
    // data2   2,3,4

    const fs = () => {
      console.log('fs');
    }
    //当解析不到值的时候,会执行fs函数
    const [ x = fs() ] = []

    const [ a ] = [1,2,3,4] //a = 1, 对比对象解析
    // console.log(a);

    // 对象的解析
    
    const { objs } = { a: 1, b: 2}
    // console.log(objs);  objs = undefined
    // 必须得保证解析前的键名和解析值的键名一致
    // 
    const { objs1 } = { objs1: 1, b: 2}
    // console.log(objs1);

    // 将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上
    const { sin } = Math
    // console.log(sin(30));

    const datas = [{
      people: {
        age: 10,
        sex: '男'
      }
    }]

    const [{people,people: {age: age1}}] = datas
    // console.log(age1); //age1 = 10

    // const [{people,people: {age}}] = datas
    // console.log(age); //age = 10
    this.arr1 = 1

    // 字符串的解构
    const [a1, ...b] = 'hllow'
    // console.log(b); llow

    const {length} = 'hellow'
    // 获得字符串的长度
      // console.log(length); 6

    const { toString: cc } = 123 // ?????
    // console.log(cc === Number.prototype.toString);
    // console.log(cc);

    // 解析构值的用图

    // 交换值
    // let x1 = 1;
    // let y1 = 2;

    // [x1, y1] = [y1, x1];
    // console.log([x1, y1]);
    let q1 = 1;
    let w1 = 3;
    [q1, w1] = [w1, q1];
    // console.log([w1,q1]);

    // 函数参数的定义
    // let fc = ([a,b,c]) => ( [ a,b,c ] )
    // console.log(fc([1,2,3]));
    
    // 字符串新增的方法

    // ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

    // console.log(String.raw`hi\\n${2 + 9}`);

    // 查找字符串
    let strings = 'nsg'
    // console.log(strings.includes('s')); //true
    // console.log(strings.startsWith('n')); //该字符串是否在头部
    // console.log(strings.endsWith('g')); //该字符串是否在尾部

    // 重复字符串
    // console.log(strings.repeat(2)); //字符串重复两次

    // 补充字符串
    // console.log(strings.padStart(4,'end'));// ensg
    // console.log(strings.padEnd(4,'end'));// nsge

    // 清除字符串的前后空格
    let newstrings = ' nb '
    // console.log(newstrings.trim()); //去掉前后空格
    // console.log(newstrings.trimStart()); //只去掉前空格
    // console.log(newstrings.trimEnd()); //只去掉后空格

    // 判断一个数字是否有限,如果参数不是数值返回false

    // console.log(Number.isFinite(15)); //true
    // console.log(Number.isFinite('aa')); //false

    // 判断是否为NAN

    // console.log(Number.isNaN(1));//false
    // console.log(Number.isNaN('da' / 9));//true

    // 判断一个数值是不是正整数

    // 由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。
    // console.log(Number.isInteger(23.0000000000000002));
    // 上面代码中，Number.isInteger的参数明明不是整数，但是会返回true。原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。

    // 类似的情况还有，如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。这时，Number.isInteger也会误判。
    // Number.isInteger(5E-324) // false
    // Number.isInteger(5E-325) // true
    // 上面代码中，5E-325由于值太小，会被自动转为0，因此返回true。
    // 总之，如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数。

    // 函数的扩展

    // 函数参数可以设置默认值,使用默认参数时,参数不能时相同的,否则会报错

    // let gets = ( x=1, y=2) => {
    //   console.log(x,y);
    // }
    // gets()
    // let fss = a => console.log(a);
    // fss(21)
    
    // 一个普通的嵌套函数

    // let fd = function() {
    //   let sa = 1
    //   return (function() {
    //     sa ++
    //     return (function() {
    //       sa ++
    //       return sa
    //     })()
    //   })()
    // }
    
    // console.log(fd());

    // 
    // console.log(-0 === +0); //true
    // console.log( NaN === NaN); //false

    // 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

    // console.log(Object.is(-0, +0)); //false
    // console.log(Object.is(NaN, NaN)); //true

    // 合并对象

    let obja = { a: 1}
    let objb = { b: 1}
    let objc = { c: 1,d: 99}
    let obje = 2
    let objf = 5
    let objg = { d: 8, f: 89}//一旦遇到同名属性会替换,不会添加
    let objd = Object.assign(objc,objg)

    // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
    // 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
    // console.log(objd);  //Object//{a: 1, b: 1, c: 1}

    
  },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>