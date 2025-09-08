import { Context } from "koa"

import dictionaryService from "@/services/dictionary";

function getDictionaryListByPage() {}
function getDictionaryItemList(ctx: Context) {
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}
function createDictionary(ctx: Context) {
  let request = ctx.request.body
  dictionaryService.createDictionary(request)
  console.log(request)
}
function removeDictionary() {}
function updateDictionary() {}
function createDictionaryItem() {}
function removeDictionaryItem() {}

export default {
  getDictionaryListByPage,
  createDictionary,
  removeDictionary,
  updateDictionary,
  createDictionaryItem,
  getDictionaryItemList,
  removeDictionaryItem
}