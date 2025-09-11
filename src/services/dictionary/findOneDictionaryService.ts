import DictionaryModel from "@/models/dictionary.model";
export default async function findOneDictionaryService(request: any) {
  let result = await DictionaryModel.findOne({
    dictionaryKey: request.dictionaryKey,
  })
  return result;
}