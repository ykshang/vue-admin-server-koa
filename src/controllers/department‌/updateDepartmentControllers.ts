import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DepartmentService from "@/services/department‌";
import { DepartmentInterface } from "@/models/Department‌.model";

let fileName = "[Controller] [updateDepartmentController.ts]";

export default async function updateDepartment(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DepartmentInterface;
  // 入口日志
  logger.debug(
    `updateDepartmentController, 更新部门请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await DepartmentService.updateDepartment(request);
  logger.debug(
    `updateDepartmentController, 更新部门处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新部门成功",
    result: result,
  };
}
