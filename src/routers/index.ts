import Router from "@koa/router";

// 基础路由
import baseRouter from "./base.router";
// 字典路由
import dictionaryRouter from "./dictionary.routers";
// 部门路由
import departmentRouter from "./department‌.router";
// 设备分类路由
import deviceCategoryRouter from "./device-category.router";
// 岗位路由
import jobPositionRouter from "./job-position.router";
// 员工路由
import employeeRouter from "./employee.router";
// 部件路由
import componentRouter from "./component.router";

// 添加前缀
const router = new Router({ prefix: "/api/v1" });

// 合并所有路由
router.use(baseRouter.routes(), baseRouter.allowedMethods());
router.use(dictionaryRouter.routes(), dictionaryRouter.allowedMethods());
router.use(departmentRouter.routes(), departmentRouter.allowedMethods());
router.use(
  deviceCategoryRouter.routes(),
  deviceCategoryRouter.allowedMethods()
);
// 岗位路由
router.use(jobPositionRouter.routes(), jobPositionRouter.allowedMethods());
// 员工路由
router.use(employeeRouter.routes(), employeeRouter.allowedMethods());
// 组件路由
router.use(componentRouter.routes(), componentRouter.allowedMethods());

export default router;
