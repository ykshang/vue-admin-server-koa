import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

interface CreateDictionaryItemRequest {
  dictionaryItemkey: string;
  dictionaryItemName: string;
  dictionaryKey: string;
  description?: string;
}

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as CreateDictionaryItemRequest;
  // console.log('reqId', ctx.requestId);
  logger.debug(`createDictionaryItemControllers, request:`, request, CTX_REQ_ID);
  // 调用服务检查 dictionaryKey 是否存在
  let dictResult = await DictionaryService.findOneDictionary({
    dictionaryKey: request.dictionaryKey,
  });
  logger.debug(
    `createDictionaryItemControllers, findOneDictionary.result:`,
    dictResult,
    CTX_REQ_ID
  );
  // 不存在则返回错误
  if (!dictResult || !dictResult._id) {
    throw {
      code: 400,
      message: "字典不存在：" + request.dictionaryKey,
      success: false,
    };
  }
  // 存在则调用服务创建字典项
  ctx.body = {
    success: true,
    message: "创建字典项成功",
  };
}
