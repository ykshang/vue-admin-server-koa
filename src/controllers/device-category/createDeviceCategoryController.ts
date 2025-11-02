import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { DeviceCategoryInterface } from "@/models/DeviceCategory.model";
import DeviceCategoryService from "@/services/device-category";

let fileName = "[Controller] [createDeviceCategoryController.ts]";

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
    `createDeviceCategoryController, 创建设备分类请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  // 业务必要性校验
  let validateResult = businessValidate(request);
  logger.debug(
    `createDeviceCategoryController, businessValidate:`,
    validateResult,
    fileName,
    CTX_REQ_ID
  );
  if (!validateResult.flag) {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: validateResult.message,
    });
  }
  let result = await DeviceCategoryService.createDeviceCategory(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建设备分类成功",
    result: result,
  };
}
function businessValidate(request: DeviceCategoryInterface) {
  if (!request.categoryName) {
    return {
      flag: false,
      message: "分类名称不能为空",
    };
  }
  if (!request.parentId && !request.isRoot) {
    return {
      flag: false,
      message: "非根分类必须指定父分类",
    };
  }
  return {
    flag: true,
    message: "",
  };
}
