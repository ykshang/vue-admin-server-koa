import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { EmployeeInterface } from "@/models/employee.model";
import EmployeeService from "@/services/employee";

let fileName = "[Controller] [createEmployeeController.ts]";

/**
 * 创建员工
 * @description 创建员工，根据父层岗位编码，以及是否存在同级兄弟岗位，来生成递增的员工编码，然后创建员工
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as EmployeeInterface;
  // 入口日志
  logger.debug(
    `createEmployeeController, 创建员工请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await EmployeeService.createEmployee(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建员工成功",
    result: result,
  };
}
