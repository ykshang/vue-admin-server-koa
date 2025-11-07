import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface DeviceModelInterface extends extFieldDocument, Document {
  model_name: string; //	设备模型名称
  model_code: string; //	设备模型编码
  category_id: string[]; //	所属设备分类
  technical_parameters: string; //	整机技术参数
  description: string; //	描述
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 字典关键词
  model_name: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "设备模型名称长度不能小于1"],
    maxlength: [100, "设备模型名称长度不能大于100"],
  },
  model_code: {
    type: String,
    required: false,
    trim: true,
  },
  category_id: {
    type: String,
    required: false,
    trim: true,
  },
  technical_parameters: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: false,
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
export default mongoose.model("device-model", schemaDefinition, "device-model");
