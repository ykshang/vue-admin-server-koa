import EmployeeModel from "@/models/employee.model";

// let fileName = '[Service] [updateEmployeeService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await EmployeeModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        // 员工姓名
        work_staff_name: request.work_staff_name,
        // 员工编号
        work_staff_code: request.work_staff_code,
        // 性别
        sex: request.sex,
        // 出生日期
        birth_date: request.birth_date,
        // 身份证号
        identity_card: request.identity_card,
        // 手机号码
        phone: request.phone,
        // 电子邮箱
        email: request.email,
        // 职级
        work_rank: request.work_rank,
        // 入职日期
        entry_date: request.entry_date,
        // 合同状态，字典值
        contract_status: request.contract_status,
        // 工作制度
        work_system: request.work_system,
        // 员工状态，字典值
        employee_status: request.employee_status,
        // 系统账号
        system_account: request.system_account,
        // 账号创建时间
        account_created_time: request.account_created_time,
        // 岗位ID列表
        job_position_ids: request.job_position_ids,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
