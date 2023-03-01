/*
 * @Description: 配置信息
 * @Autor: yjx
 * @Date: 2022-11-25
 * @LastEditors: yjx
 * @LastEditTime: 2022-11-25
 */
config = {
    appid: 'xxx', // 小程序appId
    secret: 'xxx', // 小程序secret
    serviceApi: 'http://127.0.0.1:3000', // 服务器地址
    mongodbUrl: 'mongodb://127.0.0.1:27017/service', // mongodb数据库地址 格式：mongodb://username:password@host:port/name
    jwtSecret: 'secret'
  }
  
  module.exports = config
  