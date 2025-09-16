import logger from "@/utils/logger"; // 导入我们刚创建的logger

import type { DepartmentInterface } from '@/models/Department‌.model'

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = '[Controller] [deleteDepartmentControllers.ts]';

export default async function deleteDepartmentControllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.params 
  logger.debug(
    `deleteDepartmentControllers, request:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  // let result = await DepartmentService.getDepartment‌List(params);
  //   logger.debug(
  //   `deleteDepartmentControllers, result:`,
  //   result,
  //   fileName,
  //   CTX_REQ_ID
  // );
  ctx.body = {
    code: 200,
    success: true,
    message: "删除部门成功",
    result: '删除成功',
  };
}
