<template>
  <div v-show="visible" class="_toast_modal">
    <div
      class="_toast">
      <div name="confirm" class="_confirm">
        <p class="_confirm_title">
          {{ title }}
          <span class="cancle_btn"></span>
        </p>
        <p class="_confirm_message" v-if="message">{{ message }}</p>
        <p class="_confirm_message2" v-if="message2">{{message2}}</p>

        <p>44444</p>
        <p>5555555</p>
        <div class="_confirm_btn">
          <button class="primary_btn confirm_btn">确定</button>
          <button class="white_btn cancle_btn">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 1400,
        message2: '',
        closed: false,
        timer: null,
        title: null
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false
          this.handleAfterLeave()
        }
      }
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.closed = true
            }
            clearTimeout(this.timer)
          }, this.duration)
        }
      },
      handleConfirm() {
        this.visible = false
        this.closed = true
      }
    },
    mounted() {
      if (!this.title) this.startTimer()
    }
  }
</script>

<style lang="scss" scoped>
@keyframes _toast_back_animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes _toast_dialog_animate {
  0% {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0);
  }
}
._toast_modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .2);
  animation-duration: .22s;
  animation-fill-mode: both;
  animation-name: _toast_back_animate;
}
._toast {
  margin: 0 auto;
  margin-top: 30vh;
  background: #fff;
  color: white;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 584px;
  height: 83px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
  animation-duration: .22s;
  animation-fill-mode: both;
  animation-name: _toast_dialog_animate;
  cursor: default;
  user-select: none;
}
._confirm {
  background-color: #fff;
  button {
    border: none;
  }
  ._confirm_title {
    color: #333;
    text-align: left;
    line-height: 83px;
    border-bottom: 1px solid #eee;
    // padding: 10px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    .cancle_btn {
      float: right;
      height: 20px;
      width: 20px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before,
      &::after {
        content: '';
        height: 10px;
        width: 1px;
        display: block;
        position: absolute;
        background-color: #333333;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
  ._confirm_message {
    line-height: 20px;
    margin: 90px 0 0px 0;
    color: #FF1C1C;
    font-size: 24px;
    text-align: center;
  }
  ._confirm_message2 {
    line-height: 20px;
    margin: 50px 0 94px 0;
    font-size: 24px;
    text-align: center;
  }
  ._confirm_btn {
    text-align: left;
    margin: 5px 0;
    // padding: 10px 10px 15px;
    overflow: hidden;
    button {
      display: block;
      box-sizing: border-box;
      float: left;
    }
    .primary_btn {
      height: 82px;
      width: 50%;
      line-height: 30px;
      color: #666666;
      font-size: 28px;
      background-color: #EEEEEE;
      &:hover {
        opacity: 0.9;
      }
    }
    .white_btn {
      height: 82px;
      width: 50%;
      line-height: 30px;
      font-size: 28px;
      color: #fff;
      background-color: #F6B044;
      border: 1px solid #dddddd;
    }
  }
}
p {
  color: #666;
}
</style>
