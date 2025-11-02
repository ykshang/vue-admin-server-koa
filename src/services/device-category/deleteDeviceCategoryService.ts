import DeviceCategoryModel from "@/models/DeviceCategory.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteDeviceCategoryService.ts]";

export default async function deleteDeviceCategoryService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除设备分类请求参数：", request, fileName, CTX_REQ_ID);
  let result = await DeviceCategoryModel.deleteOne({
    _id: request.id,
  });
  return result;
}
