import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

export default async function createDictionary(ctx: Context) {
  let request = ctx.request.body;
  // console.log("createDictionaryController, request:", request);
  let result = await DictionaryService.createDictionary(request);
  // console.log("createDictionary, err:", err);
  ctx.body = {
    code: 200,
    success: true,
    message: "创建字典成功",
    result: result,
  };
}
