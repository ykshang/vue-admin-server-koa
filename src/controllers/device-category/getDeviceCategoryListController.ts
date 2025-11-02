import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { DeviceCategoryInterface } from "@/models/DeviceCategory.model";
import DeviceCategoryService from "@/services/device-category";

let fileName = "[Controller] [getDeviceCategoryListController.ts]";

/**
 * 创建部门
 * @description 创建部门，根据父层部门编码，以及是否存在同级兄弟部门，来生成递增的部门编码，然后创建部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as DeviceCategoryInterface;
  // 入口日志
  logger.debug(
    `getDeviceCategoryListController, 获取设备分类列表请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await DeviceCategoryService.getDeviceCategoryList(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "获取设备分类列表成功",
    result: result,
  };
}
