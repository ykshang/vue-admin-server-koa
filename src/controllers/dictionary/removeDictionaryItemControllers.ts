import { Context } from "koa";
import logger from '@/utils/logger';
import DictionaryService from '@/services/dictionary';

let fileName = '[removeDictionaryItemControllers.ts]';

export default async function removeDictionaryItem(ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body;
  logger.debug('请求参数：', request, fileName, CTX_REQ_ID);
  let result = await DictionaryService.removeDictionaryItem(request, CTX_REQ_ID);
  logger.debug('删除字典项结果：', result, fileName, CTX_REQ_ID);
  if (result.deletedCount == 1) {
    ctx.body = {
      code: 200,
      success: true,
      message: '删除字典项成功',
      data: result,
    }
  } else {
    ctx.body = {
      code: 500,
      success: false,
      message: '删除字典项失败：未知原因',
      data: result,
    }
  }
}