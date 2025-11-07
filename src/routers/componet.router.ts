import Router from "@koa/router";
import componetController from "@/controllers/componet";

const router = new Router({ prefix: "/componet" });

// 创建组件
router.post("/create", componetController.createComponet);
// 获取组件列表
router.post("/list", componetController.getComponetList);
// 更新组件
router.post("/update", componetController.updateComponet);
// 删除组件
router.post("/delete", componetController.deleteComponet);

export default router;
