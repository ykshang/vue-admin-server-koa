import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

export default function createDictionary(ctx: Context) {
  let request = ctx.request.body;
  // console.log("createDictionaryController, request:", request);
  try {
    return DictionaryService.createDictionary(request);
  } catch (err: any) {
    // console.log("createDictionary, err:", err);
    throw err; // 重新抛出错误
  }
}
