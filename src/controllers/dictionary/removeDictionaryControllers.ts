import { Context } from "koa";

export default function removeDictionary(ctx: Context) {
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}