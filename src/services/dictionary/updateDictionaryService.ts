import DictionaryModel from "@/models/dictionary.model";

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await DictionaryModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        dictionaryKey: request.dictionaryKey,
        dictionaryName: request.dictionaryName,
        desc: request.desc,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  // console.log('更新后:', updatedUser);

  return result;
}
