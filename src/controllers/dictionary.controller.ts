import { Context } from "koa"

function getDictionaryListByPage() {}
function getDictionaryItemList(ctx: Context) {
  return ctx.body = {
    success: true,
    message: '获取字典列表成功',
  }
}
function createDictionary() {}
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