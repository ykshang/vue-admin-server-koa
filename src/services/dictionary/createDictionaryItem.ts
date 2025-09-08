export default async function createDictionaryItem(request: any) {
  console.log(request)
  return {
    success: true,
    message: '创建字典项成功',
  }
}