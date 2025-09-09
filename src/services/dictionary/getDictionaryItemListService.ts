export default async function getDictionaryItemListService(request: any) {
  console.log(request)
  return {
    success: true,
    message: '获取字典列表成功',
  }
}