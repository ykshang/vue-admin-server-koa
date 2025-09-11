import DictionaryModel from "@/models/dictionary.model";
// let fileName = '[Service] [findOneDictionaryService.ts]';

export default async function findOneDictionaryService(request: any, CTX_REQ_ID?: string) {
  let result = await DictionaryModel.findOne({
    dictionaryKey: request.dictionaryKey,
  })
  return result;
}