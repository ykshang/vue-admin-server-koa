import logger from "@/utils/logger"; // 导入我们刚创建的logger

import DepartmentModel from "@/models/Department‌.model";

let fileName = "[Service] [getAllDepartmentService.ts]";

/**
 * 获取所有部门
 * @param CTX_REQ_ID 请求ID
 * @returns 部门列表
 */
export default async function getAllDepartmentService(CTX_REQ_ID?: string) {
  logger.debug(`getAllDepartmentService, started:`, fileName, CTX_REQ_ID);

  let resul = await DepartmentModel.find().sort({
    createdAt: "desc",
  });

  logger.debug(`getAllDepartmentService, result:`, resul, fileName, CTX_REQ_ID);

  // 每页条数
  return resul;
}
