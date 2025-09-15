import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = '[Controller] [createDepartment‌Controllers.ts]';

export default async function(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body;

  logger.debug(
    `createDepartment‌Controllers, request:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await DepartmentService.createDepartment‌(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建部门成功",
    result: result,
  };
}
