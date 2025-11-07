import EmployeeModel from "@/models/employee.model";
let fileName = "[Service] [createEmployeeService.ts]";
export default async function createEmployeeModelService(request: any) {
  console.log("createEmployeeModelService, request:", fileName, request);
  let result = await new EmployeeModel(request).save();
  return result;
}
