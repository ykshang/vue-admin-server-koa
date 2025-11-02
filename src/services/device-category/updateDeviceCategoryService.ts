import DeviceCategoryModel from "@/models/DeviceCategory.model";

// let fileName = '[Service] [updateDeviceCategoryService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await DeviceCategoryModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        categoryName: request.categoryName,
        parentId: request.parentId,
        description: request.description,
        isRoot: request.isRoot,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
