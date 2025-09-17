import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = '[Controller] [getSubDepartmentsControllers.ts]';

export default async function getSubDepartmentsControllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let { parentDepartmentCode } = ctx.params;

  logger.debug(
    `getSubDepartmentsControllers, parentDepartmentCode:`,
    parentDepartmentCode,
    fileName,
    CTX_REQ_ID
  );
  let params = { parentDepartmentCode }
  let result = await DepartmentService.getDepartment‌List(params);
    logger.debug(
    `getSubDepartmentsControllers, result:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "获取部门列表成功",
    result: result,
  };
}
