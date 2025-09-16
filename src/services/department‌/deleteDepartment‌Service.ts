import Department‌Model from "@/models/Department‌.model";
// let fileName = '[Service] [createDepartment‌Service.ts]';
export default async function deleteDepartment‌Service(departmentCode: string) {
  // console.log('createDictionaryService, request:', fileName, request);
  let result = await Department‌Model.deleteOne({ departmentCode: departmentCode });
  return result;
}
