import logger from "@/utils/logger"; // 导入我们刚创建的logger

import { Context } from "koa";
import { JobPositionInterface } from "@/models/JobPosition.model";
import JobPositionService from "@/services/job-position";

let fileName = "[Controller] [getJobPositionListController.ts]";

/**
 * 创建部门
 * @description 创建部门，根据父层部门编码，以及是否存在同级兄弟部门，来生成递增的部门编码，然后创建部门
 * @param {Context} ctx Koa 上下文对象
 * @returns void 无返回值
 */

export default async function (ctx: Context) {
  let CTX_REQ_ID = ctx.requestId;
  let request = ctx.request.body as JobPositionInterface;
  // 入口日志
  logger.debug(
    `getJobPositionTreeController, 获取岗位树请求参数:`,
    request,
    fileName,
    CTX_REQ_ID
  );
  let result = await JobPositionService.getJobPositionList(request);
  // 结果日志
  logger.debug(
    `getJobPositionTreeController, 获取结果:`,
    result,
    fileName,
    CTX_REQ_ID
  );
  const tree = listToTree(result, "");
    // 结果日志
  logger.debug(
    `getJobPositionTreeController, tree:`,
    tree,
    fileName,
    CTX_REQ_ID
  );
  ctx.body = {
    code: 200,
    success: true,
    message: "获取岗位列表成功",
    result: tree,
  };
}
function listToTree(list: any[], parentId: string): any[] {
  const tree: any[] = [];
  list.forEach((item) => {
    if (item.parentId === parentId) {
      const children = listToTree(list, item.id);
      const aaa = {
        label: item.workPositionName,
        value: item.id,
        children: children,
      };
      tree.push(aaa);
    }
  });
  return tree;
}
