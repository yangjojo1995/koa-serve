/*
 * @Description: 配置信息
 * @Autor: yjx
 * @Date: 2022-11-25
 * @LastEditors: yjx
 * @LastEditTime: 2022-12-2
 */

//引入模块
const mongoose = require('mongoose')
const config = require('../config')

//连接数据库
mongoose.connect(`${config.mongodbUrl}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//得到数据库连接句柄
const db = mongoose.connection
//通过数据库连接句柄，监听mongoose数据库成功的事件
db.on('open', function (err) {
  if (err) {
    console.log('数据库连接失败')
    throw err
  }
  console.log('数据库连接成功')
})

module.exports = {
  db
}
