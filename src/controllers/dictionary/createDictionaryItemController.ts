import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

let fileName = "[Controller] [createDictionaryItemControllers.ts]";

interface CreateDictionaryItemRequest {
  dictionaryItemkey: string;
  dictionaryItemName: string;
  dictionaryKey: string;
  description?: string;
}

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as CreateDictionaryItemRequest;
  logger.debug(
    `createDictionaryItemControllers, request:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  // 调用服务检查 dictionaryKey 是否存在
  let dictResult = await DictionaryService.findOneDictionary({
    dictionaryKey: request.dictionaryKey,
  });
  logger.debug(
    "createDictionaryItemControllers, findOneDictionary.result：",
    dictResult,
    fileName,
    CTX_REQ_ID
  );
  // 不存在则返回错误
  if (!dictResult || !dictResult._id) {
    ctx.throw(400, {
      message: "字典不存在：" + request.dictionaryKey,
    });
  }
  // 创建字典项
  let result = await DictionaryService.createDictionaryItem(
    {
      dictionaryItemkey: request.dictionaryItemkey,
      dictionaryItemName: request.dictionaryItemName,
      dictionaryKey: request.dictionaryKey,
      description: request.description,
    },
    CTX_REQ_ID
  );
  logger.debug(
    "createDictionaryItemControllers, result：",
    result,
    fileName,
    CTX_REQ_ID
  );
  // 存在则调用服务创建字典项
  ctx.body = {
    code: 200,
    success: true,
    message: "创建字典项成功",
    result: result,
  };
}
