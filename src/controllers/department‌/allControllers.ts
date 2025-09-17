import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = "[Controller] [allControllers.ts]";

/**
 * 获取所有部门
 * @param ctx Koa 上下文
 * @returns 部门列表
 */
export default async function allControllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;

  logger.debug(`allControllers, started:`, fileName, CTX_REQ_ID);

  const result = await DepartmentService.getAllDepartment(CTX_REQ_ID);
  
  logger.debug(`allControllers, result:`, result, fileName, CTX_REQ_ID);

  ctx.body = {
    code: 200,
    success: true,
    message: "获取部门列表成功",
    result: result,
  };
}
