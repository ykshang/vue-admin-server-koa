import JobPositionModel from "@/models/JobPosition.model";
// let fileName = '[Service] [getJobPositionListService.ts]';

export default async function getJobPositionListService(request: any) {
  let result = await JobPositionModel.find(request).sort({
    createdAt: "desc",
  });
  // 每页条数
  return result;
}
