import Router from '@koa/router';
import dictionaryController from '@/controllers/dictionary' 

const router = new Router({ prefix: '/dictionary' })

// 字典相关
router.post('/createDictionary', dictionaryController.createDictionary)
router.post('/getDictionaryListByPage', dictionaryController.getDictionaryListByPage)
router.post('/removeDictionary', dictionaryController.removeDictionary)
router.post('/updateDictionary', dictionaryController.updateDictionary)

// 字典项相关
router.post('/createDictionaryItem', dictionaryController.createDictionaryItem)
router.post('/getDictionaryItemListByDictionaryKeyByPage', dictionaryController.getDictionaryItemListByDictionaryKeyByPage)
router.post('/removeDictionaryItem', dictionaryController.removeDictionaryItem)
router.post('/updateDictionaryItem', dictionaryController.updateDictionaryItem)



export default router
