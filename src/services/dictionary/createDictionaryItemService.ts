import logger from "@/utils/logger"; // 导入我们刚创建的logger

export default async function createDictionaryItemService(request: any) {
  logger.info('创建字典项', { request });
  return {
    success: true,
    message: '创建字典项成功',
  }
}