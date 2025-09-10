import { Context } from "koa";

export default function createDictionaryItem(ctx: Context) {
  let request = ctx.request.body;
  console.log('createDictionaryItem：', request);
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}