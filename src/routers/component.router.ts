import Router from "@koa/router";
import componentController from "@/controllers/component";

const router = new Router({ prefix: "/component" });

// 创建组件
router.post("/create", componentController.createComponet);
// 获取组件列表
router.post("/list", componentController.getComponetList);
// 更新组件
router.post("/update", componentController.updateComponet);
// 删除组件
router.post("/delete", componentController.deleteComponet);

export default router;
