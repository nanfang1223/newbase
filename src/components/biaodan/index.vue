<template>
  <div class="body">
    <div class="detail">
      <ul class="upload">
        <li class="upload_plus" :style="{height: height}">
          <input
            type="file"
            @change="upImgs($event)"
            style="height: 100%;opacity:0;"
            class="file_area"
          />
          <img src="@/assets/img/plus.png" class="plus" />
          <img
            v-if="dataURL1 !== ''"
            :src="dataURL1"
            style="position: absolute;top:0;left:0;height:100%;width: 100%;"
          />
        </li>
      </ul>
    </div>
    <button @click="$MyAlert('图片大小不能大于2M')">点击</button>
    <br/><br/>
    打电话给:0755-10086： <a href="tel:18339688018">点击拨号</a>
    <a href="https://www.cnblogs.com/dreambin/p/9035446.html">点击查看更多</a>
     <br/><br/>img<input type="file" accept="images/*" />
     <br/><br/>video<input type="file" accept="video/*" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars,eqeqeq */
// import MyAlert from '../assets/MyAlert/index'
import { upImg } from "../../apis/path1";
export default {
  name: "identity",
  props: {
    height: {
      type: String,
      default: "150px"
    }
  },
  data() {
    return {
      dataURL1: "",
      str1: ""
    };
  },
  methods: {
    async upimg(newUrl) {
      const upimg = await upImg({
        data: {
          token: localStorage.token,
          img: newUrl
        }
      }).then(res => {
        if (res.data.code == 200) {
          // console.log(res,'999')
          // var imgData = res.data.data.slice(2,res.data.data.length)
          _this.dataURL1 = _this.global.path + res.data.data;
          _this.$emit("emit", _this.dataURL1);
        }
      });
    },
    async upImgs(el) {
      var _this = this;

      // 选择的文件对象(file里只包含图片的体积，不包含图片的尺寸)
      var file = event.target.files[0];
      console.log(file);
      if (file.size > 2048000) {
        // this.message('图片大小不能大于2M')
        _this.$MyAlert('图片大小不能大于2M')
          return
        }
        if (
          file.type !== 'image/gif' &&
          file.type !== 'image/jpeg' &&
          file.type !== 'image/jpg' &&
          file.type !== 'image/png' &&
          file.type !== 'image/bmp'
        ) {
          _this.$MyAlert('文件类型不支持')
          return
        }
      // 选择的文件是图片
      if (file.type.indexOf("image") === 0) {
        // 压缩图片需要的一些元素和对象
        var reader = new FileReader(),
          // 创建一个img对象
          img = new Image();

        reader.readAsDataURL(file);
        // 文件base64化，以便获知图片原始尺寸
        reader.onload = function(e) {
          img.src = e.target.result;
        };

        // base64地址图片加载完毕后执行
        img.onload = function() {
          // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");

          // 图片原始尺寸
          var originWidth = this.width;
          var originHeight = this.height;

          // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
          var maxWidth = 950,
            maxHeight = 950;
          // 目标尺寸
          var targetWidth = originWidth,
            targetHeight = originHeight;
          // 图片尺寸超过300x300的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth;
              targetHeight = Math.round(
                maxWidth * (originHeight / originWidth)
              );
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originWidth / originHeight)
              );
            }
          }
          // canvas对图片进行缩放
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          // 清除画布
          context.clearRect(0, 0, targetWidth, targetHeight);
          // 图片压缩
          context.drawImage(img, 0, 0, targetWidth, targetHeight);
          /* 第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高 */

          // 压缩后的图片转base64 url
          /* canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
           * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92 */
          var newUrl = canvas.toDataURL("image/jpeg", 0.9); // base64 格式
          _this.dataURL1 = newUrl;
          console.log(_this.dataURL1);
          _this.upimg(newUrl);
          // 也可以把压缩后的图片转blob格式用于上传
          // canvas.toBlob((blob)=>{
          //     console.log(blob)
          //     //把blob作为参数传给后端
          // }, 'image/jpeg', 0.92)
        };
      } else {
        alert("上传失败！");
      }
    }
  }
};
</script>

<style scoped>
.header {
  height: 94px;
  line-height: 94px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #1f222b;
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  color: white;
  z-index: 9;
}
.back {
  position: absolute;
  width: 18px;
  height: 32px;
  left: 24px;
  margin-top: -16px;
  top: 50%;
  padding-right: 1rem;
}
.file_area {
  width: 100%;
  position: absolute;
  left: 0;
  border: none;
  z-index: 9;
}
.detail {
  box-sizing: border-box;
  font-size: 24px;
  position: relative;
  margin-top: 20px;
}
.detail_span {
  height: 23px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: white;
}
.detail_input {
  height: 62px;
  line-height: 62px;
  width: 68%;
}
.detail_code {
  height: 104px;
  border-bottom: 1px solid #e2e6f1;
  padding: 0 24px;
  box-sizing: border-box;
  background: white;
  font-size: 28px;
  position: relative;
}
.code_pic {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 234px;
}
.code_input {
  float: left;
  height: 82px;
  line-height: 82px;
  width: 30%;
  /*border: 1px solid #000;*/
}
.get_code {
  height: 82px;
  line-height: 82px;
  text-align: center;
  color: #feb54e;
  width: 25%;
  float: right;
  /*border: 1px solid #000;*/
}
::-webkit-input-placeholder {
  color: #cbcbcb;
} /* 使用webkit内核的浏览器 */
:-moz-placeholder {
  color: #cbcbcb;
} /* Firefox版本4-18 */
::-moz-placeholder {
  color: #cbcbcb;
} /* Firefox版本19+ */
:-ms-input-placeholder {
  color: #cbcbcb;
} /* IE浏览器 */
.btn {
  height: 72px;
  line-height: 72px;
  margin: 35px 50px;
  background: linear-gradient(
    90deg,
    rgba(189, 96, 195, 1),
    rgba(99, 98, 244, 1)
  );
  border-radius: 50px;
  font-size: 32px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #fff;
}
.upload {
  width: 100%;
  overflow: hidden;
}
.upload li {
  margin: 0 auto;
  position: relative;
  list-style: none;
}
.check {
  width: 20%;
}
.upload_plus {
  width: 60%;
  background: white;
  list-style: none;
  margin: 0 auto;
  position: relative;
}
.plus {
  height: 80px;
  width: 80px;
  position: absolute;
  /*z-index: 9;*/
  top: 50%;
  margin-top: -40px;
  left: 50%;
  margin-left: -40px;
}
</style>
