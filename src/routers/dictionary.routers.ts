import Router from '@koa/router';
import dictionaryController from '@/controllers/dictionary.controller' 

const router = new Router({ prefix: '/dictionary' })

router.post('/getDictionaryListByPage', dictionaryController.getDictionaryListByPage)
router.post('/createDictionary', dictionaryController.createDictionary)
router.post('/removeDictionary', dictionaryController.removeDictionary)
router.post('/updateDictionary', dictionaryController.updateDictionary)
router.post('/createDictionaryItem', dictionaryController.createDictionaryItem)
router.get('/getDictionaryItemList', dictionaryController.getDictionaryItemList)
router.post('/removeDictionaryItem', dictionaryController.removeDictionaryItem)

export default router
