import { Context } from "vm";

import logger from "@/utils/logger"; // 导入我们刚创建的logger

let fileName = '[middleware/logger.ts]'
/**
 * 日志中间件
 * @description 记录请求的开始和结束时间，以及状态码和耗时
 * @param ctx Koa上下文对象
 * @param next 下一个中间件函数
 * @returns { void } 无返回值
 */
export default async function (ctx: Context, next: () => Promise<any>) {
  const start = Date.now(); // 记录开始时间

  // 请求开始时日志（体现位置：进入中间件）
  // ctx.state.reqId 是 koa-requestid 注入的
  logger.info(`Request started: ${ctx.method} ${ctx.url}`, fileName, ctx.requestId);

  // 等待后续中间件和执行链完成
  await next();

  const ms = Date.now() - start; // 计算耗时
  // 请求结束时日志（体现位置：离开中间件）
  // 状态码和耗时是关键信息
  logger.info(
    `Request ended: ${ctx.method} ${ctx.url} - Status: ${ctx.status} - ${ms}ms`, fileName, ctx.requestId);
}
