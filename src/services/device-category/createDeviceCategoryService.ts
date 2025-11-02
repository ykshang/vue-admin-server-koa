import DeviceCategoryModel from "@/models/DeviceCategory.model";
let fileName = '[Service] [createDeviceCategoryService.ts]';
export default async function createDeviceCategoryModelService(request: any) {
  console.log('createDeviceCategoryModelService, request:', fileName, request);
  let result = await new DeviceCategoryModel(request).save();
  return result;
}
