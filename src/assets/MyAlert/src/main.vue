<template>
  <div
    class="_alert_dialog"
    v-show="visible"
    @mouseenter="clearTimer"
    @mouseleave="startTimer">
      <p>{{ message }}</p>
  </div>
</template>

<script type="text/babel">

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        onClose: null,
        closed: false,
        timer: null
      };
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.handleAfterLeave();
        }
      }
    },

    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },
    mounted() {
      this.startTimer();
    }
  };
</script>

<style scoped>
@keyframes _alert_dialog_animate {
  0% {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }
  10% {
    opacity: 1;
    transform: none;
  }
  90% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
._alert_dialog {
  position: fixed;
  top: 35%;
  left: 50%;
  margin-left: -100px;
  background: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 180px;
  padding: 20px 10px;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: _alert_dialog_animate;
  cursor: default;
  user-select: none;
  z-index: 9999999;
}
._alert_dialog p {
  color: #333333;
}
</style>
