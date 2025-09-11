import { Context } from "koa";
import DictionaryService from "@/services/dictionary";
import logger from "@/utils/logger";

let fileName = '[Controller] [updateDictionaryItemControllers.ts]';

export default async function updateDictionaryItem(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  const request = ctx.request.body
  logger.debug('请求参数：', request, fileName, CTX_REQ_ID);
  const result = await DictionaryService.updateDictionaryItem(request)
  logger.debug('处理结果：', result, fileName, CTX_REQ_ID);
  ctx.body = {
    code: 200,
    success: true,
    message: "更新字典成功",
    result: result,
  };
}