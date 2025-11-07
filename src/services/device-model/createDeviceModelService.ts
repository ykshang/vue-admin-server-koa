import DeviceModelModel from "@/models/device-model.model";
let fileName = "[Service] [createDeviceModelService.ts]";
export default async function createDeviceModelService(request: any) {
  console.log("createDeviceModelService, request:", fileName, request);
  let result = await new DeviceModelModel(request).save();
  return result;
}
