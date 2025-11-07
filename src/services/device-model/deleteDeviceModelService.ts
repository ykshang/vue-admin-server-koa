import DeviceModelModel from "@/models/device-model.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteDeviceModelService.ts]";

export default async function deleteDeviceModelService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除设备模型请求参数：", request, fileName, CTX_REQ_ID);
  let result = await DeviceModelModel.deleteOne({
    _id: request.id,
  });
  return result;
}
