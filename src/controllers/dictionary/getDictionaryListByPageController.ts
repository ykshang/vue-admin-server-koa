import { Context } from "koa";
import DictionaryService from "@/services/dictionary";

// let fileName = '[Controller] [getDictionaryListByPageControllers.ts]';

interface ReqType {
  pageNum: number;
  pageSize: number;
  dictionaryKey?: string;
}
export default async function getDictionaryListByPage(ctx: Context) {
  let request = ctx.request.body as ReqType;
  let { isChecked, errMessage } = businessValidate(request);
  if (!isChecked) {
    throw errMessage;
  }
  let result = await DictionaryService.getDictionaryListByPage(request);
  ctx.body = {
    code: 200,
    success: true,
    message: "获取字典列表成功",
    result: result,
  };
}
function businessValidate(params: ReqType) {
  let { pageNum, pageSize } = params;
  let isChecked = true;
  let errMessage = {};
  if (!pageNum || !pageSize) {
    isChecked = false;
    errMessage = {
      code: 400,
      success: false,
      message: "分页参数错误",
    };
  }
  return {
    isChecked,
    errMessage,
  };
}
