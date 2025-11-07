import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface DictionaryInterface extends extFieldDocument, Document {
  warehouse_name: string; //	仓库名称
  warehouse_code: string; //	仓库编码
  warehouse_type: string; //	仓库类型，字典值
  principal: string; //	仓库负责人
  phone: string; //	负责人联系方式
  workshop_id?: number; //	所属车间ID
  location?: string; //	位置
  warehouse_status?: string; //	仓库状态，字典值
  description: string; //	简介
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 字典关键词
  dictionaryKey: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [1, "字典关键词长度不能小于1"],
    maxlength: [50, "字典关键词长度不能大于50"],
  },
  // 字典名称
  dictionaryName: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "字典名称长度不能小于1"],
    maxlength: [100, "字典名称长度不能大于100"],
  },
  // 描述
  description: {
    type: String,
    default: "",
    required: false,
    unique: false,
    trim: true,
    minlength: [0, "描述长度不能小于0"],
    maxlength: [200, "描述长度不能大于200"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (v: Date) => v.getTime(), // 读取时转为毫秒数
  }, // 创建时间
  updatedAt: {
    type: Date,
    default: Date.now,
    get: (v: Date) => v.getTime(), // 读取时转为毫秒数
  }, // 更新时间
});
schemaDefinition.set("toJSON", { getters: true });

// 导出模型
export default mongoose.model("dictionary", schemaDefinition, "dictionary");
