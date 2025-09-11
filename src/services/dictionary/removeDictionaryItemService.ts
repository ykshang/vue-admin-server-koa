// let fileName = '[Service] [removeDictionaryItemService.ts]';

export default async function removeDictionaryItemService(request: any) {
  console.log(request)
  return {
    success: true,
    message: '获取字典列表成功',
  }
}