import FactoryModel from "@/models/factory.model";
// let fileName = '[Service] [getFactoryListService.ts]';

export default async function getFactoryListService(request: any) {
  let result = await FactoryModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
