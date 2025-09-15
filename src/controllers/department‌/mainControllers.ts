import logger from "@/utils/logger"; // 导入我们刚创建的logger

import type { DepartmentInterface } from "@/models/Department‌.model";

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = "[Controller] [mainControllers.ts]";

export default async function mainControllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DepartmentInterface;

  logger.debug(`mainControllers, request:`, request, fileName, CTX_REQ_ID);

  let params = { departmentName: request.departmentName };

  logger.debug(`mainControllers, 请求参数:`, params, fileName, CTX_REQ_ID);

  const result = await DepartmentService.main(params);
  
  logger.debug(`mainControllers, result:`, result, fileName, CTX_REQ_ID);

  ctx.body = {
    code: 200,
    success: true,
    message: "获取部门列表成功",
    result: result,
  };
}
