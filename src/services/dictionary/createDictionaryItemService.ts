import DictionaryItemModel from "@/models/dictionaryItem.model";
import logger from "@/utils/logger"; // 导入我们刚创建的logger

export default async function createDictionaryItemService(request:any, CTX_REQ_ID?: string) {
  logger.debug('createDictionaryItemService, 请求参数：', request, CTX_REQ_ID);
  let result = await new DictionaryItemModel(request).save();
  logger.debug('createDictionaryItemService, 结果：', result, CTX_REQ_ID);
  return result;
}