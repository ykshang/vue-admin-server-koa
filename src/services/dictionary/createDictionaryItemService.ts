import DictionaryItemModel from "@/models/dictionaryItem.model";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

let fileName = '[Service] [createDictionaryItemService.ts]';

export default async function createDictionaryItemService(request:any, CTX_REQ_ID?: string) {
  logger.debug('请求参数：', request, fileName, CTX_REQ_ID);
  let result = await new DictionaryItemModel(request).save();
  logger.debug('结果：', result, fileName, CTX_REQ_ID);
  return result;
}