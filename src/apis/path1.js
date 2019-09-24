import fetch from '../axios/fetch'

export const dataOne = data => fetch.post('/api/Login/pcLogin',data)
//上传图片
export const upImg = data => fetch.post('http://dbgj.wlnxx.top/index/Userinfo/img',data)

//斗鱼官方文档  https://wenku.baidu.com/view/e05ac2c809a1284ac850ad02de80d4d8d15a01cd.html

export const getList = data => fetch.get('api/RoomApi/live',data)