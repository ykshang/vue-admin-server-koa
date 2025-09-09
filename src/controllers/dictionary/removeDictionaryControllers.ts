import { Context } from "koa";

import DictionaryService from "@/services/dictionary";
export default async function removeDictionary(ctx: Context) {
  let request = ctx.request.body as { _id: string };
  let result = await DictionaryService.removeDictionary(request);
  ctx.body = {
    code:200,
    success: true,
    message: '删除字典成功',
    result: result
  }
}