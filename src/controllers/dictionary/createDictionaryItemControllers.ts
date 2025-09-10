import logger from "@/utils/logger";
import { Context } from "koa";

export default function createDictionaryItem(ctx: Context) {
  let request = ctx.request.body;
  logger.info(`createDictionaryItemControllers, request: ${JSON.stringify(request)}`); 
  return ctx.body = {
    success: true,
    message: '创建字典项成功',
  }
}