<template>
<div>
  <button @click="copyUrl('复制成功啦！')">点击复制</button>
  <button @click="download()">点击下载图片</button>

</div>
</template>

<script>
export default {
data() {
return {
  src: require('../../assets/logo.png')
}
},
created() {

},
mounted() {

},
methods:{
  //点击复制
     copyUrl(data){
      let url = data;
      let oInput = document.createElement('input');
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      console.log(oInput.value)
      document.execCommand("Copy"); // 执行浏览器复制命令
      // this.$layer.msg('已成功复制到剪切板')
      this.$MyAlert('已成功复制到剪切板')
      oInput.remove()
    },
    //下载图片
    getUrlBase64(url) {
      return new Promise(resolve => {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        let img = new Image()
        img.crossOrigin = 'Anonymous' //允许跨域
        img.src = url
        img.onload = function() {
          canvas.height = 300
          canvas.width = 300
          ctx.drawImage(img, 0, 0, 300, 300)
          let dataURL = canvas.toDataURL('image/png')
          canvas = null
          resolve(dataURL)
        }
      })
    },
    download() {
      this.getUrlBase64(this.src).then(base64 => {
        let link = document.createElement('a')
        link.href = base64
        link.download = 'qrCode.png'
        link.click()
      })
    },
}
}
</script>
<style scoped lang='scss'>

</style>