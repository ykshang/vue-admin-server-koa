export default async function removeDictionaryService(request: any) {
  console.log(request)
  return {
    success: true,
    message: '删除字典成功',
  }
}