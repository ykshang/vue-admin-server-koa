import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import ComponentService from "@/services/component";
import { ComponentInterface } from "@/models/component.model";

let fileName = "[Controller] [updateComponentController.ts]";

export default async function updateComponent(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as ComponentInterface;
  // 入口日志
  logger.debug(
    `updateComponentController, 更新组件请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await ComponentService.updateComponent(request);
  logger.debug(
    `updateComponentController, 更新组件处理结果:`,
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
