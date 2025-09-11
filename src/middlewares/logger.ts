import { Context } from "vm";

import logger from "@/utils/logger"; // 导入我们刚创建的logger

// 创建一个自定义的日志中间件
export default async function (ctx: Context, next: () => Promise<any>) {
  const start = Date.now(); // 记录开始时间

  // 请求开始时日志（体现位置：进入中间件）
  // ctx.state.reqId 是 koa-requestid 注入的
  logger.info(`Request started: ${ctx.method} ${ctx.url}`,ctx.requestId);

  // 等待后续中间件和执行链完成
  await next();

  const ms = Date.now() - start; // 计算耗时
  // 请求结束时日志（体现位置：离开中间件）
  // 状态码和耗时是关键信息
  logger.info(
    `Request ended: ${ctx.method} ${ctx.url} - Status: ${ctx.status} - ${ms}ms`, ctx.requestId);
}
