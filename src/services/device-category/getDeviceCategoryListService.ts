import DeviceCategoryModel from "@/models/DeviceCategory.model";
// let fileName = '[Service] [getDeviceCategoryListService.ts]';

export default async function getDeviceCategoryListService(request: any) {
  let result = await DeviceCategoryModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
