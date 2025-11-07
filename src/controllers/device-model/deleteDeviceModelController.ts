import { DeviceModelInterface } from "@/models/device-model.model";
import DeviceModelService from "@/services/device-model";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";

let fileName = "[Controller] [deleteDeviceModelController.ts]";

/**
 * 删除设备模型
 * @description 删除设备模型，根据设备模型编码，来删除设备模型
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceModelInterface;
  // 入口日志
  logger.debug(
    `deleteDeviceModelController, 删除设备模型请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await DeviceModelService.deleteDeviceModel(request);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除设备模型成功",
      result: result,
    };
  } else {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: "删除设备模型失败",
    });
  }
}
