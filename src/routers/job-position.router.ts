import Router from "@koa/router";
import jobPositionController from "@/controllers/job-position";

const router = new Router({ prefix: "/job-position" });

// 创建岗位
router.post("/create", jobPositionController.createJobPosition);
// 获取岗位列表
router.post("/list", jobPositionController.getJobPositionList);
// 更新岗位
router.post("/update", jobPositionController.updateJobPosition);
// 删除岗位
router.post("/delete", jobPositionController.deleteJobPosition);
// 获取岗位树
router.post("/tree", jobPositionController.getJobPositionTree);

export default router;
