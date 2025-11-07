import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DeviceModelService from "@/services/device-model";
import { DeviceModelInterface } from "@/models/device-model.model";

let fileName = "[Controller] [updateDeviceModelController.ts]";

export default async function updateDeviceModel(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceModelInterface;
  // 入口日志
  logger.debug(
    `updateDeviceModelController, 更新设备模型请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await DeviceModelService.updateDeviceModel(request);
  logger.debug(
    `updateDeviceModelController, 更新设备模型处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新组件成功",
    result: result,
  };
}
