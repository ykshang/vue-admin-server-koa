import { Context } from "koa";

// let fileName = '[Controller] [removeDictionaryItemControllers.ts]';

export default function removeDictionaryItem(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body;
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}