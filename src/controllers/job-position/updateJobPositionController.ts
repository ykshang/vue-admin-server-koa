import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import JobPositionService from "@/services/job-position";
import { JobPositionInterface } from "@/models/JobPosition.model";

let fileName = "[Controller] [updateJobPositionController.ts]";

export default async function updateJobPosition(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as JobPositionInterface;
  // 入口日志
  logger.debug(
    `updateJobPositionController, 更新岗位请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  const result = await JobPositionService.updateJobPosition(request);
  logger.debug(
    `updateJobPositionController, 更新岗位处理结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "更新岗位成功",
    result: result,
  };
}
