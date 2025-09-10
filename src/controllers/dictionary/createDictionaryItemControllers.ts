import logger from "@/utils/logger";
import { Context } from "koa";
interface CreateDictionaryItemRequest {
  dictionaryItemkey: string;
  dictionaryItemName: string;
  dictionaryKey: string;
  description?: string;
}

export default function createDictionaryItem(ctx: Context) {
  let request = ctx.request.body as CreateDictionaryItemRequest;
  logger.info(`createDictionaryItemControllers, request: ${JSON.stringify(request)}`);
  // 调用服务检查 dictionaryKey 是否存在
  // 不存在则返回错误
  // 存在则调用服务创建字典项
  return ctx.body = {
    success: true,
    message: '创建字典项成功',
  }
}