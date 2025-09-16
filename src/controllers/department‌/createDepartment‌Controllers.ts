import logger from "@/utils/logger"; // 导入我们刚创建的logger

import type { DepartmentInterface } from "@/models/Department‌.model";

import { Context } from "koa";
import DepartmentService from "@/services/department‌";
import generateNewDepartmentCode from "@/utils/generateNewDepartmentCode";

let fileName = "[Controller] [createDepartment‌Controllers.ts]";

/**
 * 创建部门
 * @description 创建部门，根据父层部门编码，以及是否存在同级兄弟部门，来生成递增的部门编码，然后创建部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DepartmentInterface;
  // 入口日志
  logger.debug(
    `createDepartment‌Controllers, request:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  // 获取当前父节点下边所有的部门编码
  let departmentList = await DepartmentService.getDepartment‌List({
    parentDepartmentCode: request.parentDepartmentCode,
  });
  logger.debug("同层的兄弟部门：", departmentList, fileName, CTX_REQ_ID);
  let tempCode = request.parentDepartmentCode
  if (departmentList.length > 0) {
    tempCode = departmentList.reduce((max, item) => {
      return item.departmentCode > max ? item.departmentCode : max;
    }, '');
  }
  let newCode = generateNewDepartmentCode(tempCode, departmentList.length === 0);
  logger.debug(
    `createDepartment‌Controllers, 新编码:`,
    newCode,
    fileName,
    CTX_REQ_ID
  );
  // 赋予递增的部门编码
  request.departmentCode = newCode;
  let result = await DepartmentService.createDepartment‌(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建部门成功",
    result: result,
    // result: {},
  };
}
