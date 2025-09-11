import logger from "@/utils/logger";
import DictionaryItemModel from "@/models/dictionaryItem.model";

let fileName = '[Service] [getDictionaryItemListByDictionaryKeyByPageService.ts]';

export default async function(request: any, CTX_REQ_ID?: string) {
  logger.debug('请求参数：', request, fileName, CTX_REQ_ID);
  const { pageNum, pageSize, dictionaryKey } = request;
  let params = {
    dictionaryKey: dictionaryKey
  }
  // 跳过条数
  let offset = (pageNum - 1) * pageSize;
  // 每页条数
  let limitNum = pageSize;
  const [totalRows, queryResult] = await Promise.all([
    DictionaryItemModel.countDocuments(params),
    DictionaryItemModel.find(params)
      .sort({ updatedAt: "desc" })
      .skip(offset)
      .limit(limitNum),
  ]);
  return {
    total: totalRows,
    pageNum,
    pageSize,
    data: queryResult,
  };
}