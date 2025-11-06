import JobPositionModel from "@/models/JobPosition.model";
let fileName = "[Service] [createJobPositionService.ts]";
export default async function createJobPositionModelService(request: any) {
  console.log("createJobPositionModelService, request:", fileName, request);
  let result = await new JobPositionModel(request).save();
  return result;
}
