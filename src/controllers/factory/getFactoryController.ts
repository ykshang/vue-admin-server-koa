import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { FactoryInterface } from "@/models/factory.model";
import FactoryService from "@/services/factory";

let fileName = "[Controller] [getFactoryListController.ts]";

/**
 * 创建部门
 * @description 创建部门，根据父层部门编码，以及是否存在同级兄弟部门，来生成递增的部门编码，然后创建部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as FactoryInterface;
  // 入口日志
  logger.debug(
    `getFactoryListController, 获取工厂列表请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await FactoryService.getFactoryList(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "获取工厂列表成功",
    result: result,
  };
}
