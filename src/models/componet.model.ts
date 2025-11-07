import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface ComponentInterface extends extFieldDocument, Document {
  component_name?: string; //	部件名称
  component_code?: string; //	部件编码
  component_type?: string; //	部件类型，字典值
  component_category?: number; //	所属分类，字典值
  specification_model?: string; //	规格型号
  specifications?: string; //	技术规格
  description?: string; //	描述
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 字典关键词
  component_name: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "部件名称长度不能小于1"],
    maxlength: [100, "部件名称长度不能大于100"],
  },
  component_code: {
    type: String,
    trim: true,
  },
  component_type: {
    type: String,
    required: false,
    trim: true,
  },
  component_category: {
    type: String,
    required: false,
    trim: true,
  },
  specification_model: {
    type: String,
    required: false,
    trim: true,
  },
  specifications: {
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
export default mongoose.model("component", schemaDefinition, "component");
