import ComponentModel from "@/models/component.model";
let fileName = "[Service] [createComponentService.ts]";
export default async function createComponentModelService(request: any) {
  console.log("createComponentModelService, request:", fileName, request);
  let result = await new ComponentModel(request).save();
  return result;
}
