import logger from "@/config/logger";
/**
 * 转换日志参数
 * @description 转换日志参数，将参数中的reqId、fileName、json对象、正则表达式转换为字符串
 * @param args 日志参数
 * @returns 转换后的日志参数
 */
function transformParames(args: any[]) {
  let reqId = args.pop();
  let fileName = args.pop();
  // 如果是json需要序列化
  // 如果是正则表达式直接打印
  // 否则直接打印
  let message = args
    .map((item) =>
      typeof item === "object"
        ? JSON.stringify(item, (key, value) => {
            if (value instanceof RegExp) {
              // console.log("RegExp", value);
              return `RegExp(/${value.source}/${value.flags})`;
            }
            return value;
          })
        : item
    )
    .join(" ");
  return {
    message,
    context: {
      reqId,
      fileName,
    },
  };
}
/**
 * error日志
 * @description 记录error日志
 * @param args 日志参数
 */
function error(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.error(message, context);
}
/**
 * info日志
 * @description 记录info日志
 * @param args 日志参数
 */
function info(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.info(message, context);
}
/**
 * debug日志
 * @description 记录debug日志
 * @param args 日志参数
 */
function debug(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.debug(message, context);
}
/**
 * warn日志
 * @description 记录warn日志
 * @param args 日志参数
 */
function warn(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.warn(message, context);
}
/**
 * 日志对象
 * @description 日志对象，输出error、info、debug、warn等级别的日志
 */
export default {
  info,
  error,
  debug,
  warn,
};
