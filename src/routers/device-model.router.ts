import Router from "@koa/router";
import deviceModelController from "@/controllers/device-model";

const router = new Router({ prefix: "/device-model" });

// 创建设备模型
router.post("/create", deviceModelController.createDeviceModel);
// 获取设备模型列表
router.post("/list", deviceModelController.getDeviceModelList);
// 更新设备模型
router.post("/update", deviceModelController.updateDeviceModel);
// 删除设备模型
router.post("/delete", deviceModelController.deleteDeviceModel);


export default router;
