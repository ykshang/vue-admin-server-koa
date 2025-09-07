import Router from '@koa/router';
// import dictionaryService from '../service/dictionary.js'

const router = new Router({ prefix: '/dictionary' })

router.post('/getDictionaryListByPage', async (ctx) => {
  // const resultList = await dictionaryService.getDictionaryListByPage(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
router.post('/createDictionary', async (ctx) => {
  // console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.createDictionary(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
router.post('/removeDictionary', async (ctx) => {
  // console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.removeDictionary(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  } 
})
router.post('/updateDictionary', async (ctx) => {
  // console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.updateDictionary(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
router.post('/createDictionaryItem', async (ctx) => {
  // console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.createDictionaryItem(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
router.post('/getDictionaryItemList', async (ctx) => {
  // console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.getDictionaryItemList(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
router.post('/removeDictionaryItem', async (ctx) => {
  console.log('请求体', ctx.request.body)
  // const resultList = await dictionaryService.removeDictionaryItem(ctx.request.body)
  ctx.body = {
    code: 200,
    data: {},
    message: 'success'
  }
})
export default router
