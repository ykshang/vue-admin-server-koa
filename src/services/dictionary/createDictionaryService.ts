import DictionaryModel from "@/models/dictionary.model";
// let fileName = '[Service] [createDictionaryService.ts]';
export default async function createDictionaryService(request: any) {
  // console.log('createDictionaryService, request:', fileName, request);
  let result = await new DictionaryModel(request).save();
  return result;
}
