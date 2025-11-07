import ComponentModel from "@/models/component.model";

// let fileName = '[Service] [updateComponentService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await ComponentModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        component_name: request.component_name, //	部件名称
        component_code: request.component_code, //	部件编码
        component_type: request.component_type, //	部件类型，字典值
        component_category: request.component_category, //	所属分类，字典值
        specification_model: request.specification_model, //	规格型号
        specifications: request.specifications, //	技术规格
        description: request.description, //	描述
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
