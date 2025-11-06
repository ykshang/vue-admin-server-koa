import JobPositionModel from "@/models/JobPosition.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteJobPositionService.ts]";

export default async function deleteJobPositionService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除岗位请求参数：", request, fileName, CTX_REQ_ID);
  let result = await JobPositionModel.deleteOne({
    _id: request.id,
  });
  return result;
}
