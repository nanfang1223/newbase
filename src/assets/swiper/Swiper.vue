<template>
  <div
    id="Swiper"
    :style="{height: height + 'px'}"
    @mouseover="mousein()"
    @mouseout="mouseout()">
    <div class="swiper">
      <div
        ref="item"
        class="swiper-item">
        <ul
          ref="items"
          :style="{width: 100 * imgdata.length + '%'}">
          <li
            v-for="(item, index) in imgdata"
            :key="index"
            :style="{
              backgroundImage: `url(${item.markPic})`,
              width: 100 / imgdata.length + '%'
            }">
            </li>
        </ul>
      </div>
      <div
        ref="dot"
        :style="{ textAlign: dot_align }"
        class="swiper-page">
        <span
          v-for="(item, index) in imgdata"
          :key="index"
          :style="item.active ? { backgroundColor: dot_color, opacity: 0.9 } : {}"
          @click="change(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    height: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: true
    },
    loopTime: {
      type: Number,
      default: 3000
    },
    direction: {
      type: String,
      default: 'left'
    },
    imgdata: {
      type: Array,
      default: new Array(0)
    },
    dot_color: {
      type: String,
      default: '#f33333'
    },
    dot_align: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      loopTimer: null,
      index: 0,
      titleList: '',
      screenWidth: document.body.clientWidth,
      timer: false
    }
  },
  created() {
    // this.playerOptions.autoplay = true
  },
  beforeMount() {
    // this.init()
    // this.getNoties()
    
  },
  beforeCreate() {
    this.$nextTick(() => {
      this.change(0)
    })
  },
  destroyed() {
    clearTimeout(this.loopTimer)
    this.loopTimer = null
  },
  methods: {
    init() {
      this.loopTimer = null
      const timer = () => {
        this.loopTimer = setTimeout(() => {
          this.change()
          timer()
        }, this.loopTime)
      }
      timer()
    },
    change(i) {
      const item = this.$refs.item
      const len = this.imgdata.length
      if (i !== undefined) this.index = i
      this.index++
      const items = this.$refs.items
      if (items) {
        items.style.transform = `translate3d(${0 -
          item.offsetWidth * (this.index - 1) +
          'px'}, 0, 0)`
      }
      this.dotChange(this.index - 1)
      if (this.index >= len) this.index = 0
    },
    dotChange(i) {
      this.imgdata.forEach(element => {
        element.active = false
      })
      this.imgdata[i].active = true
    },
    go(url) {
      url && window.open(url, '_blank')
    },
    mousein() {
      clearTimeout(this.loopTimer)
      this.loopTimer = null
    },
    mouseout() {
      this.init()
    },
    isBig() {
      this.$emit('emit', 1)
    }
  },
  mounted() {
     window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
    console.log(this.screenWidth,'000')
  },
   watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        if (this.screenWidth < 1200) {
          this.screenWidth = 1200
        }
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#Swiper {
  color: #fff;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-item {
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul {
        height: 100%;
        transition: all 500ms;
        li {
          height: 100%;
          // width: 90%;
          float: left;
          background-position: center center;
          background-size: cover;
          position: relative;
          // padding: 10%;
          cursor: pointer;
          .video-player {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            width: 100%;
            margin: 0 auto;
            // z-index: 9999999999999;
          }
          .menban {
            width: 100%;
            height: 100%;
            background-color: rgba(1,1,1,0.3);
            position: absolute;
            z-index: 99;
            button {
              background-color:transparent;
              border: none;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              width: 80px;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .swiper-page {
      height: 16px;
      width: 100%;
      line-height: 16px;
      position: absolute;
      bottom: 30px;
      left: 0;
      z-index: 99;
      span {
        display: inline-block;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin: 0 10px;
        background-color: white;
        opacity: 0.6;
        cursor: pointer;
      }
      .active {
        background-color: #f33333;
      }
    }
  }
}
</style>
