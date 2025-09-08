import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface DictionaryInterface extends extFieldDocument, Document {
  dictionaryKey: string;
  dictionaryName: string;
  description?: string;
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
    minlength: 3,
    maxlength: 50,
  },
  // 字典名称
  dictionaryName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  // 描述
  description: {
    type: String,
    default: '',
    required: false,
    unique: false,
    trim: true,
    minlength: 0,
    maxlength: 200
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (v: Date) => v.getTime() // 读取时转为毫秒数
  }, // 创建时间
  updatedAt: {
    type: Date,
    default: Date.now,
    get: (v: Date) => v.getTime() // 读取时转为毫秒数
  }, // 更新时间
});
schemaDefinition.set('toJSON', { getters: true });

// 导出模型
export default mongoose.model('dictionary', schemaDefinition, 'dictionary')
