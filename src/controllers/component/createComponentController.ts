import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { ComponentInterface } from "@/models/component.model";
import ComponentService from "@/services/component";

let fileName = "[Controller] [createComponentController.ts]";

/**
 * 创建组件
 * @description 创建部件
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as ComponentInterface;
  // 入口日志
  logger.debug(
    `createComponentController, 创建部件请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await ComponentService.createComponent(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建部件成功",
    result: result,
  };
}
