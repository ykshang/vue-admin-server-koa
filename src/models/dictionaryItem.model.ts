import mongoose, { Document } from "mongoose";
import { extFieldDocument } from "@/types/base";

// 定义用户接口
export interface DictionaryInterface extends extFieldDocument, Document {
  dictionaryItemkey: string;
  dictionaryItemName: string;
  dictionaryKey: string; // 关联 字典关键词
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 字典项关键词
  dictionaryItemkey: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, '字典关键词长度不能小于3'],
    maxlength: [50, '字典关键词长度不能大于50'],
  },
  // 名称
  dictionaryItemName: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, '字典名称长度不能小于5'],
    maxlength: [100, '字典名称长度不能大于100']
  },
  // 关联 字典关键词
  dictionaryKey: {
    type: String,
    required: true, 
    unique: true,
    ref: 'dictionary',
    trim: true,
    minlength: [3, '字典关键词长度不能小于3'],
    maxlength: [50, '字典关键词长度不能大于50'],
  }, 
  // 描述
  description: {
    type: String,
    default: '',
    required: false,
    unique: false,
    trim: true,
    minlength: [0, '描述长度不能小于0'],
    maxlength: [200, '描述长度不能大于200']
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
})
schemaDefinition.set('toJSON', { getters: true });

// 导出模型
export default mongoose.model('dictionary-item', schemaDefinition, 'dictionary-item')
