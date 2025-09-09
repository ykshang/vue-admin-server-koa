import DictionaryModel from "@/models/dictionary.model";
export default async function createDictionaryService(request: any) {
  // console.log('createDictionaryService, request:', request);
  let result = await new DictionaryModel(request).save();
  return result;
}
