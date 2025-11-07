import FactoryModel from "@/models/factory.model";
let fileName = "[Service] [createFactoryService.ts]";
export default async function createFactoryModelService(request: any) {
  console.log("createFactoryModelService, request:", fileName, request);
  let result = await new FactoryModel(request).save();
  return result;
}
