import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { JobPositionInterface } from "@/models/JobPosition.model";
import JobPositionService from "@/services/job-position";

let fileName = "[Controller] [createJobPositionController.ts]";

/**
 * 创建岗位
 * @description 创建岗位，根据父层岗位编码，以及是否存在同级兄弟岗位，来生成递增的岗位编码，然后创建岗位
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as JobPositionInterface;
  // 入口日志
  logger.debug(
    `createJobPositionController, 创建岗位请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await JobPositionService.createJobPosition(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建岗位成功",
    result: result,
  };
}
