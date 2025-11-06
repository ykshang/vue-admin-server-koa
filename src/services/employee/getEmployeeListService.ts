import EmployeeModel from "@/models/employee.model";
// let fileName = '[Service] [getEmployeeListService.ts]';

export default async function getEmployeeListService(request: any) {
  let result = await EmployeeModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
