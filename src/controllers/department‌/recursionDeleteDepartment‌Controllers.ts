import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DepartmentService from "@/services/department‌";

let fileName = '[Controller] [recursionDeleteDepartment‌Controllers.ts]';

export default async function recursionDeleteDepartment‌Controllers(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.params 
  const departmentCode = request.departmentCode
  logger.debug(
    `recursionDeleteDepartment‌Controllers, departmentCode:`, 
    departmentCode,
    fileName,
    CTX_REQ_ID
  );
  let result = await DepartmentService.recursionDeleteDepartment‌(departmentCode, CTX_REQ_ID);
  logger.debug(
    `recursionDeleteDepartment‌Controllers, result:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  if (result.deletedCount > 0) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除部门成功",
      result: result,
    };
  } else {
    throw {
      code: 500,
      success: false,
      message: "删除失败：" + JSON.stringify(result),
      result: result,
    }
  }
}
