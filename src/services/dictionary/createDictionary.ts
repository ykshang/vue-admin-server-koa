import DictionaryModel from "@/models/dictionary.model";
export default async function createDictionary(request: any) {
  // console.log('createDictionaryService, request:', request);
  let result = await new DictionaryModel(request).save();
  return {
    code: 200,
    success: true,
    message: "创建字典成功",
    result: result,
  };
}
