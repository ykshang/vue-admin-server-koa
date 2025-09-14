import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义用户接口
export interface DictionaryInterface extends extFieldDocument, Document {
  departmentId: number;
  departmentCode: string;
  departmentName: string;
  parentDepartmentId: number;
  departmentLevel: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const schemaDefinition = new mongoose.Schema({
  // 部门ID
  departmentId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: [4, "部门ID长度不能小于4"],
    maxlength: [50, "部门ID长度不能大于50"],
  },
  // 部门编码
  departmentCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [4, "上级部门编码长度不能小于4"],
    maxlength: [50, "上级部门编码长度不能大于50"],
  },
  // 部门名称
  departmentName: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "部门名称长度不能小于5"],
    maxlength: [100, "部门名称长度不能大于100"],
  },
  // 上级部门编码
  parentDepartmentId: {
    type: Number,
    required: true,
    trim: true,
    minlength: [4, "上级部门编码长度不能小于4"],
    maxlength: [50, "上级部门编码长度不能大于50"],
  },
  // 部门层级
  departmentLevel: {
    type: Number,
    required: true,
    minlength: [1, "部门层级长度不能小于1"],
    maxlength: [5, "部门层级长度不能大于5"],
  },
  // 描述
  description: {
    type: String,
    default: "",
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
export default mongoose.model("department", schemaDefinition, "department");
