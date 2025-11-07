import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import FactoryService from "@/services/factory";
import { FactoryInterface } from "@/models/factory.model";

let fileName = "[Controller] [updateFactoryController.ts]";

export default async function updateFactory(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as FactoryInterface;
  // 入口日志
  logger.debug(
    `updateFactoryController, 更新工厂请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await FactoryService.updateFactory(request);
  logger.debug(
    `updateFactoryController, 更新工厂处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新工厂成功",
    result: result,
  };
}
