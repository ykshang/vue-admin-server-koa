import { Context } from 'koa';
import { v4 } from 'uuid';

export default async function(ctx: Context, next: () => Promise<any>) {
  ctx.requestId = v4(); // 注入到state
  ctx.set('X-Request-Id', ctx.requestId);
  await next();
}
