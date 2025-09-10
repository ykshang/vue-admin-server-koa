import { Context } from 'koa';
import { v4 } from 'uuid';

export default async function(ctx: Context, next: () => Promise<any>) {
  ctx.state.reqId = v4(); // 注入到state
  ctx.set('X-Request-Id', ctx.state.reqId);
  await next();
}
