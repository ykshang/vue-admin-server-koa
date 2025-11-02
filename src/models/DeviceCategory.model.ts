import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义设备分类接口
export interface DeviceCategoryInterface extends extFieldDocument, Document {
  categoryName: string;
  parentId?: string;
  description?: string;
  isRoot?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// 定义用户模型
const SchemaDefinition = new mongoose.Schema({
  // 分类名称
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [4, "分类名称长度不能小于4"],
    maxlength: [50, "分类名称长度不能大于50"],
  },
  // 分类父ID
  parentId: {
    type: String,
  },
  // 分类描述
  description: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "描述长度不能小于0"],
    maxlength: [200, "描述长度不能大于200"],
  },
  isRoot: {
    type: Boolean,
    default: false,
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
SchemaDefinition.set("toJSON", { getters: true });

// 导出模型
/**
 * @type { DepartmentInterface }
 */
export default mongoose.model(
  "device-category",
  SchemaDefinition,
  "device-category"
);
