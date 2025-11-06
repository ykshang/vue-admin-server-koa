import JobPositionModel from "@/models/JobPosition.model";

// let fileName = '[Service] [updateJobPositionService.ts]';

export default async function (request: any) {
  // console.log('请求体', request)
  const result = await JobPositionModel.findOneAndUpdate(
    { _id: request._id },
    {
      $set: {
        workPositionName: request.workPositionName,
        responsibility: request.responsibility,
        workPositionType: request.workPositionType,
        parentId: request.parentId,
        status: request.status,
        qualification: request.qualification,
        isRoot: request.isRoot,
        jobQualifications: request.jobQualifications,
        description: request.description,
        updatedAt: new Date(),
      },
    },
    { new: true, runValidators: true }
  );
  return result;
}
