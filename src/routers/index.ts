import Router from '@koa/router';

import baseRouter from './base.router'
import dictionaryRouter from './dictionary.routers'
import departmentRouter from './department‌.router'

const router = new Router({ prefix: '/api' });

// 合并所有路由
router.use(baseRouter.routes(), baseRouter.allowedMethods());
router.use(dictionaryRouter.routes(), dictionaryRouter.allowedMethods());
router.use(departmentRouter.routes(), departmentRouter.allowedMethods());

export default router