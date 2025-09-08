import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

export default function createDictionary(ctx: Context) {
  let request = ctx.request.body;
  DictionaryService.createDictionary(request);
  console.log(request);
  return (ctx.body = {
    success: true,
    message: "获取字典列表成功",
  });
}
