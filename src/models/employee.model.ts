import { extFieldDocument } from "@/types/base";
import mongoose, { Document } from "mongoose";

// 定义员工模型
export interface EmployeeInterface extends extFieldDocument, Document {
  // 员工姓名
  work_staff_name: string;
  // 员工编号
  work_staff_code: string;
  // 性别
  sex: string;
  // 出生日期
  birth_date: Date;
  // 身份证号
  identity_card: string;
  // 手机号码
  phone: string;
  // 电子邮箱
  email: string;
  // 职级
  work_rank: string;
  // 入职日期
  entry_date: Date;
  // 合同状态，字典值
  contract_status: string;
  // 工作制度
  work_system: string;
  // 员工状态，字典值
  employee_status: string;
  // 系统账号
  system_account: string;
  // 账号创建时间
  account_created_time: Date;
  job_position_ids: string[];
}

// 定义岗位模型
const SchemaDefinition = new mongoose.Schema({
  // 员工姓名
  work_staff_name: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "员工姓名长度不能小于1"],
    maxlength: [50, "员工姓名长度不能大于50"],
  },
  // 员工编号
  work_staff_code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [1, "员工编号长度不能小于1"],
    maxlength: [50, "员工编号长度不能大于50"],
  },
  // 性别
  sex: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "性别长度不能小于1"],
    maxlength: [10, "性别长度不能大于10"],
  },
  // 出生日期
  birth_date: {
    type: Date,
    required: true,
  },
  // 身份证号
  identity_card: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [1, "身份证号长度不能小于1"],
    maxlength: [18, "身份证号长度不能大于18"],
  },
  // 岗位ID列表
  job_position_ids: {
    type: [[String]],
    required: true,
  },
  // 手机号码
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // 电子邮箱
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // 职级
  work_rank: {
    type: String,
    required: true,
    trim: true,
  },
  // 入职日期
  entry_date: {
    type: Date,
    required: true,
  },
  // 合同状态，字典值
  contract_status: {
    type: String,
    required: true,
    trim: true,
  },
  // 工作制度
  work_system: {
    type: String,
    required: true,
    trim: true,
  },
  // 员工状态，字典值
  employee_status: {
    type: String,
    required: true,
    trim: true,
  },
  // 系统账号
  system_account: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // 账号创建时间
  account_created_time: {
    type: Date,
    required: true,
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
 * @type { EmployeeInterface }
 */
export default mongoose.model("employee", SchemaDefinition, "employee");
