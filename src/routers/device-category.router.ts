import Router from "@koa/router";
import deviceCategoryController from "@/controllers/device-category";

const router = new Router({ prefix: "/device-category" });

// 创建设备分类
router.post("/create", deviceCategoryController.createDeviceCategory);
// 获取设备分类列表
router.post("/list", deviceCategoryController.getDeviceCategoryList);
// 更新设备分类
router.post("/update", deviceCategoryController.updateDeviceCategory);
// 删除设备分类
router.post("/delete", deviceCategoryController.deleteDeviceCategory);


export default router;
