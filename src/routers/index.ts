import Router from '@koa/router';

import baseRouter from './base.router'
import dictionaryRouter from './dictionary.routers'

const router = new Router();

// 合并所有路由
router.use(baseRouter.routes(), baseRouter.allowedMethods());
router.use(dictionaryRouter.routes(), dictionaryRouter.allowedMethods());

export default router