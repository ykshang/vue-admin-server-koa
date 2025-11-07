import FactoryModel from "@/models/factory.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteFactoryService.ts]";

export default async function deleteFactoryService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除岗位请求参数：", request, fileName, CTX_REQ_ID);
  let result = await FactoryModel.deleteOne({
    _id: request.id,
  });
  return result;
}
