import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { DeviceCategoryInterface } from "@/models/DeviceCategory.model";
import DeviceCategoryService from "@/services/device-category";

let fileName = "[Controller] [deleteDeviceCategoryController.ts]";

/**
 * 删除部门
 * @description 删除部门，根据部门编码，来删除部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceCategoryInterface;
  // 入口日志
  logger.debug(
    `deleteDeviceCategoryController, 删除设备分类请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await DeviceCategoryService.deleteDeviceCategory(request);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除设备分类成功",
      result: result,
    };
  } else {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: "删除设备分类失败",
    });
  }
  ctx.body = {
    code: 200,
    success: true,
    message: "删除设备分类成功",
    result: result,
  };
}
