import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

export default async function createDictionary(ctx: Context) {
  let request = ctx.request.body;
  // console.log("createDictionaryController, request:", request);
  let result = await DictionaryService.createDictionary(request);
  ctx.body = result;
  // console.log("createDictionary, err:", err);
}
