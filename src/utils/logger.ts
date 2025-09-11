import logger from "@/config/logger";

function transformParames(args: any[]) {
  let requestId = args.pop();
  let message = args
    .map((item) => (typeof item === "object" ? JSON.stringify(item) : item))
    .join(" ");
  return {
    message,
    requestId: {
      reqId: requestId,
    },
  };
}
function error(...args: any[]) {
  let { message, requestId } = transformParames(args);
  logger.error(message, requestId);
}
function info(...args: any[]) {
  let { message, requestId } = transformParames(args);
  logger.info(message, requestId);
}
function debug(...args: any[]) {
  let { message, requestId } = transformParames(args);
  logger.debug(message, requestId);
}
function warn(...args: any[]) {
  let { message, requestId } = transformParames(args);
  logger.warn(message, requestId);
}

export default {
  info,
  error,
  debug,
  warn,
};
