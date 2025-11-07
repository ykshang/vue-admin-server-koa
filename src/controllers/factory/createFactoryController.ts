import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { FactoryInterface } from "@/models/factory.model";
import FactoryService from "@/services/factory";

let fileName = "[Controller] [createFactoryController.ts]";

/**
 * 创建工厂
 * @description 创建工厂
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as FactoryInterface;
  // 入口日志
  logger.debug(
    `createFactoryController, 创建工厂请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await FactoryService.createFactory(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建工厂成功",
    result: result,
  };
}
