<template>
<div>
  <div>
    input 与 button 高度不齐问题  给button添加属性vertical-align:top;
    <div class="error">
      <input type="text" placeholder="请输入"><button>我是button</button>
    </div>
    <div @click="$router.push('/')">返回</div>
  </div>
</div>
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

}
}
</script>
<style scoped lang='scss'>
.error {
  input {
    height: 40px;
    line-height: 40px;
    border: none;
    // background-color: #f33333;
    border: 1px solid #f33333;
  }
  button {
    height: 40px;
    line-height: 40px;
    border: none;
    border: 1px solid red;
    background-color: #f33333;
    // margin-left: -6px;
    border-radius:0px 6px 6px 0px;
    // vertical-align:top;
  }
}
</style>