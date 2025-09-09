import DictionaryModel from "@/models/dictionary.model";

export default async function getDictionaryListByPage(request: any) {
  // console.log("getDictionaryListByPageService, ctx:", request);
  const { pageNum, pageSize, dictionaryKey } = request;
  let params: {
    dictionaryKey?: RegExp;
  } = {};
  if (dictionaryKey) {
    // 进行模糊匹配
    params.dictionaryKey = new RegExp(dictionaryKey);
  }
  // 跳过条数
  let offset = (pageNum - 1) * pageSize;
  // 每页条数
  let limitNum = pageSize;
  const [totalResult, queryResult] = await Promise.all([
    DictionaryModel.countDocuments(params),
    DictionaryModel.find(params)
      .sort({ updatedAt: "desc" })
      .skip(offset)
      .limit(limitNum),
  ]);
  return {
    total: totalResult,
    pageNum,
    pageSize,
    data: queryResult,
  };
}
