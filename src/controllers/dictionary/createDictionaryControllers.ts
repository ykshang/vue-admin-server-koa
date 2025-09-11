import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

// let fileName = '[Controller] [createDictionaryControllers.ts]';

export default async function(ctx: Context) {
  let request = ctx.request.body;
  let result = await DictionaryService.createDictionary(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建字典成功",
    result: result,
  };
}
