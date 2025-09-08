import { Context } from "koa";

export default function getDictionaryListByPage(ctx: Context) {
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}