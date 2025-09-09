import DictionaryModel from "@/models/dictionary.model";
// 根据 _id 删除字典
export default async function (request: { _id: any; }) {
  // console.log(request)
  const result = await DictionaryModel.deleteOne({ _id: request._id });
  return result;
}
