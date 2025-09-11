import DictionaryItemModel from '@/models/dictionaryItem.model';
import logger from '@/utils/logger';

let fileName = '[Service] [removeDictionaryItemService.ts]';

export default async function removeDictionaryItemService(request: any, CTX_REQ_ID?: string) {
  logger.debug('删除字典项请求参数：', request, fileName, CTX_REQ_ID);
  let result = await DictionaryItemModel.deleteOne({
    _id: request._id,
  })
  return result;
}