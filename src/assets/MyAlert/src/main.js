import Vue from 'vue';
import Main from './main.vue';
let MyAlertConstructor = Vue.extend(Main);

let instance;
let instances = [];

const MyAlert = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  const seed = seed + 1
  let userOnClose = options.onClose;
  let id = 'myalert_' + seed;

  options.onClose = function() {
    MyAlert.close(id, userOnClose);
  };
  instance = new MyAlertConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = seed;
  instances.push(instance);
  return instance.vm;
};

MyAlert.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

MyAlert.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default MyAlert;
