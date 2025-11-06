import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义设备分类接口
export interface JobPositionInterface extends extFieldDocument, Document {
  workPositionName: string; // 岗位名称
  responsibility: string; // 岗位职责
  workPositionType: string; // 岗位类型，字典值
  parentId?: string; // 分类父ID
  status: string; // 岗位状态，字典值
  qualification?: string; // 任职资格
  isRoot: boolean; // 是否根节点
  jobQualifications?: string; // 任职要求
  description?: string; // 岗位描述
  createdAt?: Date; // 创建时间
  updatedAt?: Date; // 更新时间
}

// 定义岗位模型
const SchemaDefinition = new mongoose.Schema({
  // 岗位名称
  workPositionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [1, "岗位名称长度不能小于1"],
    maxlength: [50, "岗位名称长度不能大于50"],
  },
  // 岗位职责
  responsibility: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "岗位职责长度不能小于0"],
    maxlength: [200, "岗位职责长度不能大于200"],
  },
  // 岗位类型，字典值
  workPositionType: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "岗位类型长度不能小于0"],
    maxlength: [20, "岗位类型长度不能大于20"],
  },
  // 岗位状态，字典值
  status: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "岗位状态长度不能小于0"],
    maxlength: [20, "岗位状态长度不能大于20"],
  },
  // 任职资格
  qualification: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "任职资格长度不能小于0"],
    maxlength: [200, "任职资格长度不能大于200"],
  },
  // 任职要求
  jobQualifications: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "任职要求长度不能小于0"],
    maxlength: [200, "任职要求长度不能大于200"],
  },
  // 岗位父ID
  parentId: {
    type: String,
  },
  // 岗位描述
  description: {
    type: String,
    default: "",
    trim: true,
    minlength: [0, "描述长度不能小于0"],
    maxlength: [200, "描述长度不能大于200"],
  },
  // 是否根节点
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
export default mongoose.model("job-position", SchemaDefinition, "job-position");
