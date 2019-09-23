import fetch from '../axios/fetch'

export const dataOne = data => fetch.post('/api/Login/pcLogin',data)
//上传图片
export const upImg = data => fetch.post('http://dbgj.wlnxx.top/index/Userinfo/img',data)