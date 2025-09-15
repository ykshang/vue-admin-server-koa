/**
 * 生成新的部门编码
 * @param departmentCode 部门编码
 * @param isParent 是否传入的是父部门编码
 * @returns 新的部门编码
 */
export default function generateNewDepartmentCode(
  departmentCode: string,
  isParent: boolean
) {
  let codeList = departmentCode.split("");
  let tempCodeList = [];
  while (codeList.length > 1) {
    tempCodeList.push(codeList.splice(0, 2).join(""));
  }
  tempCodeList = tempCodeList.filter((item) => item !== "00");
  if (isParent) {
    tempCodeList.push("01");
  } else {
    let last = tempCodeList.pop();
    let temp = Number(last) + 1;
    last = temp < 10 ? "0" + temp : temp.toString();
    tempCodeList.push(last);
  }
  let result = tempCodeList.join("") + '00000000000000000000'
  // 生成新的部门编码
  return result.slice(0, 20);
}
