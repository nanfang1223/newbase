<template>
  <div>
    <div
      class="slider-stage"
      :style="{
        width: width + 'rem',
        height: height + 'px'
      }"
    >
      <ul
        ref="sli"
        class="slider"
        :style="{
                left: lefts + 'rem',
                transition: transitions,
                width: dataImg.length > 1 ? (100 * (dataImg.length + 1) + '%') : (100 * dataImg.length + '%')
              }"
      >
        <li
          v-for="(item, index) in dataImg"
          :key="index"
          :style="{
            width: 100/ (dataImg.length + 1) + '%'
          }"
        >
          <img :src="item.url" />
        </li>
        <li
          v-if="dataImg.length > 1"
          :style="{
            width: 100/ (dataImg.length + 1) + '%'
          }"
        >
          <img :src="dataImg[0].url" />
        </li>
      </ul>
      <ul class="deg">
        <ul class="deg">
          <span
            v-for="(item, index1) in dataImg"
            :key="index1"
            :class="index1 + 1 == degs ? 'active' : ''"
            @click="changeDeg(index1)"
          ></span>
        </ul>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "slider",
  data() {
    return {
      index: 1, //图片下标
      lefts: 0, //左移动
      transitions: "", //过渡动画
      dataImg: [
        {
          url: require("../../assets/img/whlb1.png")
        },
        {
          url: require("../../assets/img/whlb2.png")
        },
        {
          url: require("../../assets/img/whlb3.png")
        },
        {
          url: require("../../assets/img/homebanner1.png")
        },
        {
          url: require("../../assets/img/homebanner2.png")
        },
        {
          url: require("../../assets/img/homebanner3.png")
        }
      ],
      csetTime: "", //定时器
      degs: 1, //导航点
      width: "15", //轮播图的宽度
      height: "500" //轮播图的高度
    };
  },
  created() {
    this.autoLoop();
  },
  methods: {
    autoLoop() {
      this.csetTime = setInterval(() => {
        if (this.dataImg.length < 2) {
          clearInterval(this.csetTime);
          return;
        }
        this.lefts = -this.width * this.index;
        this.transitions = "all 0.5s";
        this.index++;
        if (this.degs >= this.dataImg.length) {
          this.degs = 1;
        } else {
          this.degs = this.index;
        }
        if (this.index >= this.dataImg.length + 1) {
          setTimeout(() => {
            this.lefts = 0;
            this.transitions = "all 0s";
            this.index = 1;
          }, 500);
        }
      }, 3000);
    },
    //点击切换图片
    changeDeg(e) {
      this.index = e;
      this.degs = e + 1;
      clearInterval(this.csetTime);
      this.autoLoop();
      this.lefts = -this.width * this.index;
      this.transitions = "all 0.5s";
      this.index++;
    }
  }
};
</script>
 
<style>
html {
  color: #000;
  background: #fff;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

fieldset,
img {
  border: 0;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

q:before,
q:after {
  content: "";
}

abbr,
acronym {
  border: 0;
}

* {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  /*字体*/
}

li {
  list-style: none;
}

input,
img {
  border: none;
}
</style>
<style lang='scss' scoped>
.slider-stage {
  background-color: rgba(134, 134, 134, 0.33);
  border: 10px grey solid;
  margin: 200px auto;
  position: relative;
  overflow: hidden;
  .slider {
    position: absolute;
    /* width: 400%; */
    height: 100%;
    left: 0px;
    top: 0;
    li {
      height: 100%;
      list-style: none;
      float: left;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .deg {
    height: 20px;
    width: 100%;
    line-height: 20px;
    position: absolute;
    bottom: 30px;
    left: 0;
    z-index: 99;
    text-align: center;
    transition: all 0.5;
    span {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin: 0 10px;
      background-color: white;
      opacity: 0.6;
      cursor: pointer;
    }
    .active {
      background-color: #f33333;
      transition: all 0.5;
    }
  }
}
</style>