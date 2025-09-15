import DepartmentModel from "@/models/Department‌.model";
// let fileName = '[Service] [getDepartment‌ListService.ts]';

export default async function getDepartment‌ListService(request: any) {
  const { parentDepartmentCode } = request;
  let resul = await DepartmentModel.find({parentDepartmentCode})
    .sort({ updatedAt: "desc" })
  // 每页条数
  return resul
}
