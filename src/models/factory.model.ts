import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface FactoryInterface extends extFieldDocument, Document {
  factory_name: string; //	工厂名称
  short_name: string; //	工厂简称
  factory_code: string; //	工厂编码
  linkman: string; //	联系人
  phone: string; //	联系电话
  mail: string; //	邮箱
  certification: string; //	认证信息
  factory_status: string; //	工厂状态，字典值
  factory_area: string; //	工厂区域
  employee: number; //	员工数量
  establish_date: Date; //	成立日期
  address: string; //	地址
  postal_code: string; //	邮政编码
  description?: string; //	简介
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 字典关键词
  factory_name: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "工厂名称长度不能小于1"],
    maxlength: [100, "工厂名称长度不能大于100"],
  },
  short_name: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "工厂简称长度不能小于1"],
    maxlength: [100, "工厂简称长度不能大于100"],
  },
  factory_code: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "工厂编码长度不能小于1"],
    maxlength: [100, "工厂编码长度不能大于100"],
  },
  linkman: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "联系人长度不能小于1"],
    maxlength: [100, "联系人长度不能大于100"],
  },
  phone: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "联系电话长度不能小于1"],
    maxlength: [100, "联系电话长度不能大于100"],
  },
  mail: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "邮箱长度不能小于1"],
    maxlength: [100, "邮箱长度不能大于100"],
  },
  certification: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "认证信息长度不能小于1"],
    maxlength: [100, "认证信息长度不能大于100"],
  },
  factory_status: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "工厂状态长度不能小于1"],
    maxlength: [100, "工厂状态长度不能大于100"],
  },
  factory_area: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "工厂区域长度不能小于1"],
    maxlength: [100, "工厂区域长度不能大于100"],
  },
  employee: {
    type: Number,
    required: false,
    min: [0, "员工数量不能小于0"],
  },
  establish_date: {
    type: Date,
    required: false,
  },
  address: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "地址长度不能小于1"],
    maxlength: [100, "地址长度不能大于100"],
  },
  postal_code: {
    type: String,
    required: false,
    trim: true,
    minlength: [1, "邮政编码长度不能小于1"],
    maxlength: [100, "邮政编码长度不能大于100"],
  },
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
export default mongoose.model("factory", schemaDefinition, "factory");
