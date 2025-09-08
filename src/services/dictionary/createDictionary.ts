import DictionaryModel from "@/models/dictionary.model"
export default function createDictionary(request: any) {
  console.log(request)
  let dictionary = new DictionaryModel(request)
  // dictionary.save()
  return dictionary.save().then((res) => {
    return {
      success: true,
      message: '创建字典成功',
      data: res
    }
  })
}