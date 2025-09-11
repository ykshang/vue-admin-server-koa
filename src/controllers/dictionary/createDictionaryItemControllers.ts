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
  let CTX_REQ_ID =  ctx.requestId;
  let request = ctx.request.body as CreateDictionaryItemRequest;
  // console.log('reqId', ctx.requestId);
  logger.info(`createDictionaryItemControllers, request:`, request,12424234234, CTX_REQ_ID);
  // 调用服务检查 dictionaryKey 是否存在
  let dictResult = await DictionaryService.findOneDictionary({
    dictionaryKey: request.dictionaryKey,
  });
  // logger.info(
  //   `createDictionaryItemControllers, findOneDictionary.result: ${JSON.stringify(
  //     dictResult
  //   )}`
  // );
  if (!dictResult || !dictResult.success) {
    throw {
      code: 400,
      message: "字典项目不存在：" + request.dictionaryKey,
      success: false,
    };
  }
  // 不存在则返回错误
  // 存在则调用服务创建字典项
  return (ctx.body = {
    success: true,
    message: "创建字典项成功",
  });
}
