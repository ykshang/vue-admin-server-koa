import Router from '@koa/router';
import departmentController from '@/controllers/department' 

const router = new Router({ prefix: '/department' })

// 部门相关
router.post('/createDepartment', departmentController.createDepartment)



export default router
