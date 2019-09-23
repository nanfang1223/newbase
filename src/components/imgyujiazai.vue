
<template>
<div>学习
<ul >
  <h2>可编辑contenteditable</h2>
  <li contenteditable>列表1</li>
  <h3>隐藏hidden</h3>
  <li hidden>列表2</li>
  <li tabindex="4">列表3</li>
</ul>
<h3>报错提示spellcheck(input)</h3>
<input type="text" spellcheck>
<br/>
<a href="http://www.baidu.com" tabindex="1">hello1</a>
<a href="http://www.jd.com" tabindex="3">hello2</a>
<a href="http://www.yh.com" tabindex="2">hello3</a>
<h1>html5</h1>
<input type="checkbox" checked>
<input type="checkbox" checked>

<section></section>
<nav></nav>
<h2>article元素</h2>
<article>
  <header>
    <h1>头部</h1>
    <p>内容</p>
  </header>
  <footer>底部</footer>
</article>
<div @click="$router.push('/')">返回</div>
<div @click="$router.push('/neiqian')">前往aside</div>
<div @click="$router.push('/biaodan')">前往表单</div>
<!-- <article>
  <header>
    <embed src="#" height="300">
  </header>
</article> -->
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

</style>