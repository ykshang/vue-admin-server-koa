import ComponentModel from "@/models/component.model";
import logger from "@/utils/logger";

let fileName = "[Service] [deleteComponentService.ts]";

export default async function deleteComponentService(
  request: any,
  CTX_REQ_ID?: string
) {
  logger.debug("删除组件请求参数：", request, fileName, CTX_REQ_ID);
  let result = await ComponentModel.deleteOne({
    _id: request.id,
  });
  return result;
}
