import DictionaryItemModel from "@/models/dictionaryItem.model";

// let fileName = '[Service] [updateDictionaryItemService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await DictionaryItemModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        dictionaryItemkey: request.dictionaryItemkey,
        dictionaryItemName: request.dictionaryItemName,
        dictionaryKey: request.dictionaryKey,
        description: request.description,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
