import { Context } from 'koa';
import { v4 } from 'uuid';

/**
 * 请求ID中间件
 * @description 为每个请求生成唯一的请求ID，并将其设置到请求头和上下文状态中
 * @param ctx Koa上下文对象
 * @param next 下一个中间件函数
 */
export default async function(ctx: Context, next: () => Promise<any>) {
  ctx.requestId = v4(); // 注入到state
  ctx.set('X-Request-Id', ctx.requestId);
  await next();
}
