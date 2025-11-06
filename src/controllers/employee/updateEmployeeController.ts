import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import EmployeeService from "@/services/employee";
import { EmployeeInterface } from "@/models/employee.model";

let fileName = "[Controller] [updateEmployeeController.ts]";

export default async function updateEmployee(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as EmployeeInterface;
  // 入口日志
  logger.debug(
    `updateEmployeeController, 更新员工请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await EmployeeService.updateEmployee(request);
  logger.debug(
    `updateEmployeeController, 更新员工处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新员工成功",
    result: result,
  };
}
