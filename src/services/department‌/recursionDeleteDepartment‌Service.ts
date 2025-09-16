import Department‌Model from "@/models/Department‌.model";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

let fileName = '[Service] [recursionDeleteDepartment‌Service.ts]';
export default async function deleteDepartment‌Service(departmentCode: string, CTX_REQ_ID?: string) {
  logger.debug("要删除的部门：", departmentCode, fileName, CTX_REQ_ID);
  const codeList = departmentCode.split('');
  let tempCode = []
  while (codeList.length > 0) {
    tempCode.push(codeList.splice(0,2).join(""));
  }
  tempCode = tempCode.filter(item => item !== '00');
  let params = {
    departmentCode: { $regex: new RegExp(`^${tempCode.join("")}`) } 
  }
  let result = await Department‌Model.deleteMany(params);
  logger.debug("部门的递归删除结果：", result, fileName, CTX_REQ_ID);
  return result;
}
