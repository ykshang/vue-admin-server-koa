import { ComponentInterface } from "@/models/component.model";
import ComponentService from "@/services/component";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";

let fileName = "[Controller] [deleteEmployeeController.ts]";

/**
 * 删除员工
 * @description 删除员工，根据员工编码，来删除员工
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as ComponentInterface;
  // 入口日志
  logger.debug(
    `deleteComponentController, 删除组件请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await ComponentService.deleteComponent(request);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除组件成功",
      result: result,
    };
  } else {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: "删除组件失败",
    });
  }
}
