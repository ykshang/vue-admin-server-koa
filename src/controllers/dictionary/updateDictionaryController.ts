import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

// let fileName = '[Controller] [updateDictionaryControllers.ts]';

export default async function updateDictionary(ctx: Context) {
  const request = ctx.request.body
  const result = await DictionaryService.updateDictionary(request)
  ctx.body = {
    code: 200,
    success: true,
    message: "更新字典成功",
    result: result,
  };
}