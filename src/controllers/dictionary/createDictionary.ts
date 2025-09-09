import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

export default async function createDictionary(ctx: Context) {
  let request = ctx.request.body;
  // console.log("createDictionaryController, request:", request);
  try {
    let result = await DictionaryService.createDictionary(request);
    ctx.body = result;
  } catch (err: any) {
    // console.log("createDictionary, err:", err);
    throw err; // 重新抛出错误
  }
}
