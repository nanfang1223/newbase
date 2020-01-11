import fetch from '../axios/fetch'

export const dataOne = data => fetch.post('/api/Login/pcLogin',data)
//上传图片
export const upImg = data => fetch.post('http://dbgj.wlnxx.top/index/Userinfo/img',data)

//斗鱼官方文档  https://wenku.baidu.com/view/e05ac2c809a1284ac850ad02de80d4d8d15a01cd.html

export const getList = data => fetch.get('api/RoomApi/live',data)

//测试
export const DLi = data => fetch.get('api/v1/order/confirmOrder',data)
// https://6lp5zo51gg.execute-api.cn-north-1.amazonaws.com.cn/beta/docLogin

export const beta = data => fetch.post('/beta/docLogin',data)