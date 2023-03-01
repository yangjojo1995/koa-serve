/* 定义 goods Schema */
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    id: { type: String },            // id
    projectId: { type: String },     // 项目id
    name: { type: String },          // 商品名
    describe: { type: String },      // 商品描述
    cover: { type: String },         // 商品封面
    imgList: { type: Array },        // 商品图
    price: { type: Number },         // 价格
    originalPrice: { type: Number }, // 划线价
    inventory: { type: Number },     // 库存
    richText: { type: String },      // 商品详情
});

// 创建Model
const GoodsModel = mongoose.model("goods", projectSchema, 'goods');
module.exports = GoodsModel



