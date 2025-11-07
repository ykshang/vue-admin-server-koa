import EmployeeModel from "@/models/employee.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteEmployeeService.ts]";

export default async function deleteEmployeeService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除员工请求参数：", request, fileName, CTX_REQ_ID);
  let result = await EmployeeModel.deleteOne({
    _id: request.id,
  });
  return result;
}
