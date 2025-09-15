import logger from "@/utils/logger"; // 导入我们刚创建的logger

import type { DepartmentInterface } from '@/models/Department‌.model'

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = '[Controller] [getDepartment‌List‌Controllers.ts]';

export default async function getDepartment‌List‌Controllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DepartmentInterface;

  logger.debug(
    `getDepartment‌List‌Controllers, request:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let params = { parentDepartmentCode: request.parentDepartmentCode }
  let result = await DepartmentService.getDepartment‌List(params);
    logger.debug(
    `getDepartment‌List‌Controllers, result:`,
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
