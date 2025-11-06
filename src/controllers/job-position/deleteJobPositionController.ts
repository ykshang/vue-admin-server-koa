import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { JobPositionInterface } from "@/models/JobPosition.model";
import JobPositionService from "@/services/job-position";

let fileName = "[Controller] [deleteJobPositionController.ts]";

/**
 * 删除岗位
 * @description 删除岗位，根据岗位编码，来删除岗位
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as JobPositionInterface;
  // 入口日志
  logger.debug(
    `deleteJobPositionController, 删除岗位请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await JobPositionService.deleteJobPosition(request);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: "删除岗位成功",
      result: result,
    };
  } else {
    ctx.throw(400, {
      code: 400,
      success: false,
      message: "删除岗位失败",
    });
  }
  ctx.body = {
    code: 200,
    success: true,
    message: "删除岗位成功",
    result: result,
  };
}
