import Router from '@koa/router';
import dictionaryController from '@/controllers/dictionary' 

const router = new Router({ prefix: '/dictionary' })

router.post('/createDictionary', dictionaryController.createDictionary)
router.post('/createDictionaryItem', dictionaryController.createDictionaryItem)
router.post('/getDictionaryListByPage', dictionaryController.getDictionaryListByPage)
router.post('/getDictionaryItemList', dictionaryController.getDictionaryItemList)
router.post('/removeDictionary', dictionaryController.removeDictionary)
router.post('/removeDictionaryItem', dictionaryController.removeDictionaryItem)
router.post('/updateDictionary', dictionaryController.updateDictionary)

export default router
