import Router from '@koa/router';
import departmentController from '@/controllers/department‌' 

const router = new Router({ prefix: '/department' })

// 主查询方法
router.post('/main', departmentController.main)
// 获取所有部门
router.get('/all', departmentController.all)
// 创建部门
router.post('/createDepartment', departmentController.createDepartment‌)
// 获取部门列表
router.post('/getDepartmentList', departmentController.getDepartment‌List‌)
// 获取子部门列表
router.get('/getSubDepartments/:parentDepartmentCode', departmentController.getSubDepartments)
// 删除部门及其子部门
router.post('/delete/:departmentCode', departmentController.recursionDeleteDepartment‌)
// 更新部门信息
router.post('/updateDepartment', departmentController.updateDepartment)



export default router
