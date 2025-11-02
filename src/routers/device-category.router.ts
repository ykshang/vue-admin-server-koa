import Router from "@koa/router";
import deviceCategoryController from "@/controllers/device-category";

const router = new Router({ prefix: "/device-category" });

// 创建部门
router.post("/create", deviceCategoryController.createDeviceCategory);

export default router;
