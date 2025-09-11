import logger from "@/utils/logger";
import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

let fileName = '[Controller] [getDictionaryItemListByDictionaryKeyByPageControllers.ts]';

export default async function getDictionaryItemList(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body;
  logger.debug('getDictionaryItemListControllers, request：', request, fileName, CTX_REQ_ID);
  let result = await DictionaryService.getDictionaryItemListByDictionaryKeyByPage(request, CTX_REQ_ID);
  logger.debug('getDictionaryItemListControllers, result：', result, fileName, CTX_REQ_ID);

  return ctx.body = {
    code: 200,
    success: true,
    message: '获取字典列表成功',
    result: result,
  }
}