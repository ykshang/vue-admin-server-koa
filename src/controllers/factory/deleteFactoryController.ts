import { FactoryInterface } from "@/models/factory.model";
import FactoryService from "@/services/factory";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";

let fileName = "[Controller] [deleteEmployeeController.ts]";

/**
 * 删除工厂
 * @description 删除工厂，根据工厂编码，来删除工厂
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as FactoryInterface;
  // 入口日志
  logger.debug(
    `deleteFactoryController, 删除工厂请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await FactoryService.deleteFactory(request);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除员工成功",
      result: result,
    };
  } else {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: "删除员工失败",
    });
  }
}
