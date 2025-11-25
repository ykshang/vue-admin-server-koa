import DepartmentModel from "@/models/Department‌.model";

// let fileName = '[Service] [updateDepartmentService.ts]';

export default async function (request: any) {
  console.log('请求体', request)
  const result = await DepartmentModel.findOneAndUpdate(
    { _id: request.id },
    {
      $set: {
        departmentName: request.departmentName,
        departmentShortName: request.departmentShortName,
        description: request.description,
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
