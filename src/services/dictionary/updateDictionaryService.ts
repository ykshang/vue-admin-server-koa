import DictionaryModel from "@/models/dictionary.model";

// let fileName = '[Service] [updateDictionaryService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await DictionaryModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        dictionaryKey: request.dictionaryKey,
        dictionaryName: request.dictionaryName,
        description: request.description,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
