import Router from "@koa/router";
import employeeController from "@/controllers/employee";

const router = new Router({ prefix: "/employee" });

// 创建员工
router.post("/create", employeeController.createEmployee);
// 获取员工列表
router.post("/list", employeeController.getEmployeeList);
// 更新员工
router.post("/update", employeeController.updateEmployee);
// 删除员工
router.post("/delete", employeeController.deleteEmployee);

export default router;
