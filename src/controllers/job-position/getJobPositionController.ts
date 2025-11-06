import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { JobPositionInterface } from "@/models/JobPosition.model";
import JobPositionService from "@/services/job-position";

let fileName = "[Controller] [getJobPositionListController.ts]";

/**
 * 创建部门
 * @description 创建部门，根据父层部门编码，以及是否存在同级兄弟部门，来生成递增的部门编码，然后创建部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as JobPositionInterface;
  // 入口日志
  logger.debug(
    `getJobPositionListController, 获取岗位列表请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await JobPositionService.getJobPositionList(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "获取岗位列表成功",
    result: result,
  };
}
