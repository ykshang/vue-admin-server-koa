import ComponentModel from "@/models/component.model";
// let fileName = '[Service] [getComponentListService.ts]';

export default async function getComponentListService(request: any) {
  let result = await ComponentModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
