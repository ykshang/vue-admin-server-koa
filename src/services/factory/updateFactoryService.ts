import FactoryModel from "@/models/factory.model";

// let fileName = '[Service] [updateFactoryService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await FactoryModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        factory_name: request.factory_name, //	工厂名称
        short_name: request.short_name, //	工厂简称
        factory_code: request.factory_code, //	工厂编码
        linkman: request.linkman, //	联系人
        phone: request.phone, //	联系电话
        mail: request.mail, //	邮箱
        certification: request.certification, //	认证信息
        factory_status: request.factory_status, //	工厂状态，字典值
        factory_area: request.factory_area, //	工厂区域
        employee: request.employee, //	员工数量
        establish_date: request.establish_date, //	成立日期
        address: request.address, //	地址
        postal_code: request.postal_code, //	邮政编码
        description: request.description, //	简介
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
