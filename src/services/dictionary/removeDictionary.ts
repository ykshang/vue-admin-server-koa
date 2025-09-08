export default async function removeDictionary(request: any) {
  console.log(request)
  return {
    success: true,
    message: '删除字典成功',
  }
}