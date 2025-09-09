export default async function createDictionaryItemService(request: any) {
  console.log(request)
  return {
    success: true,
    message: '创建字典项成功',
  }
}