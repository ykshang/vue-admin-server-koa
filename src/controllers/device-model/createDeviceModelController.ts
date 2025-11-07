import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { DeviceModelInterface } from "@/models/device-model.model";
import DeviceModelService from "@/services/device-model";

let fileName = "[Controller] [createDeviceModelController.ts]";

/**
 * 创建设备模型
 * @description 创建设备模型
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceModelInterface;
  // 入口日志
  logger.debug(
    `createDeviceModelController, 创建设备模型请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await DeviceModelService.createDeviceModel(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建设备模型成功",
    result: result,
  };
}
