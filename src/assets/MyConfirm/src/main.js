import Vue from 'vue'
import Main from './main.vue'
// import { zIndexRank } from './../../MyOptions/index.js'
let MyConfirmConstructor = Vue.extend(Main)

let instance;
let callback, confirmNode, cancleNode;

const MyConfirm = function(options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let seed = seed + 1
  options.cb && typeof options.cb === 'function' ? callback = options.cb : ''
  let id = 'myconfirm_' + seed

  instance = new MyConfirmConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = seed

  const getChild = (dom, cls, arr = []) => {
    const get = dom => {
      const childs = Array.from(dom.children)
      while (childs.length) {
        arr.push(childs[0])
        childs[0].children.length && get(childs[0])
        childs.shift()
      }
    }
    get(dom)
    return arr.filter(e => e.className.split(' ').indexOf(cls) > -1)
  }
  confirmNode = getChild(instance.dom, 'confirm_btn')[0]
  cancleNode = getChild(instance.dom, 'cancle_btn')
  if (options.cb) {
    confirmNode.addEventListener('click', () => {
      callback()
      instance.visible = false
      instance.closed = true
    })
    cancleNode.forEach(el => {
      el.addEventListener('click', () => {
        instance.visible = false
        instance.closed = true
      })
    })
  }
  
  return instance.vm
}

export default MyConfirm
