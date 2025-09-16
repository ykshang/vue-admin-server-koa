/**
 * 生成递增的部门编码
 * 1. 传入父部门编码：在最后两位添加01
 * 2. 传入子部门编码：在最后两位数字递增+1
 * @param departmentCode 部门编码
 * @param isParent 是否传入的是父部门编码
 * @returns 新的部门编码(20位)
 */
export default function generateNewDepartmentCode(
  departmentCode: string,
  isParent: boolean
) {
  let tempCode = departmentCode;
  while (tempCode.endsWith("00")) {
    tempCode = tempCode.slice(0, -2);
  }
  if (isParent) {
    tempCode += "01";
  } else {
    let last = tempCode.slice(-2);
    let temp = Number(last) + 1;
    last = temp < 10 ? "0" + temp : temp.toString();
    tempCode = tempCode.slice(0, -2) + last;
  }
  let result = tempCode + "00000000000000000000";
  // 生成新的部门编码
  return result.slice(0, 20);
}
