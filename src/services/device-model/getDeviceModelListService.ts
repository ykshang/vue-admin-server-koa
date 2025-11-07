import DeviceModelModel from "@/models/device-model.model";
// let fileName = '[Service] [getDeviceModelListService.ts]';

export default async function getDeviceModelListService(request: any) {
  let result = await DeviceModelModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
