import DictionaryModel from "@/models/dictionary.model";
export default async function createDictionary(request: any) {
  // console.log('createDictionaryService, request:', request);
  await new DictionaryModel(request)
    .save()
    .then((res) => {
      return {
        code: 200,
        success: true,
        message: "创建字典成功",
        data: res,
      };
    })
    .catch((err) => {
      throw err; // 直接抛出原始错误
    });
}
