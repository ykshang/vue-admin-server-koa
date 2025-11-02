import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DeviceCategoryService from "@/services/device-category";
import { DeviceCategoryInterface } from "@/models/DeviceCategory.model";

let fileName = "[Controller] [updateDeviceCategoryController.ts]";

export default async function updateDeviceCategory(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceCategoryInterface;
  // 入口日志
  logger.debug(
    `updateDeviceCategoryController, 更新设备分类请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await DeviceCategoryService.updateDeviceCategory(request);
  logger.debug(
    `updateDeviceCategoryController, 更新设备分类处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新设备分类成功",
    result: result,
  };
}
