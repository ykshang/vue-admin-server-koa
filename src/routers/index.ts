import Router from "@koa/router";

// 基础路由
import baseRouter from "./base.router";
// 字典路由
import dictionaryRouter from "./dictionary.routers";
// 部门路由
import departmentRouter from "./department‌.router";
// 设备分类路由
import deviceCategoryRouter from "./device-category.router";
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

export default router;
