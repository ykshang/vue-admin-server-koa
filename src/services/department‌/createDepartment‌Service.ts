import Department‌Model from "@/models/Department‌.model";
// let fileName = '[Service] [createDepartment‌Service.ts]';
export default async function createDepartment‌ModelService(request: any) {
  // console.log('createDictionaryService, request:', fileName, request);
  let result = await new Department‌Model(request).save();
  return result;
}
