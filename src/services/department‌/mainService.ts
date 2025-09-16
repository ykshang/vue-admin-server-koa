import logger from "@/utils/logger"; // 导入我们刚创建的logger

import DepartmentModel from "@/models/Department‌.model";

let fileName = "[Service] [mainService.ts]";

export default async function mainService(request: any, CTX_REQ_ID?: string) {
  const { departmentName } = request;

  logger.debug(`mainService, request:`, request, fileName, CTX_REQ_ID);

  let params: {
    departmentName?: RegExp;
    parentDepartmentCode?: string;
  } = {};
  if (departmentName) {
    // 如果传入部门名，根据部门名查询
    params.departmentName = new RegExp(departmentName);
  } else {
    // 否则只查询根部门
    params.parentDepartmentCode = "00000000000000000000";
  }
  logger.debug(`mainService, params:`, params, fileName, CTX_REQ_ID);

  let resul = await DepartmentModel.find(params).sort({
    createdAt: "desc",
  });

  logger.debug(`mainService, result:`, resul, fileName, CTX_REQ_ID);

  // 每页条数
  return resul;
}
