import DeviceModelModel from "@/models/device-model.model";

// let fileName = '[Service] [updateDeviceModelService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await DeviceModelModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        device_model_name: request.device_model_name, //	设备模型名称
        device_model_code: request.device_model_code, //	设备模型编码
        category_id: request.category_id, //	所属设备分类
        technical_parameters: request.technical_parameters, //	整机技术参数
        description: request.description, //	描述
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
