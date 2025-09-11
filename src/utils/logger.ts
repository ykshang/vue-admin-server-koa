import logger from "@/config/logger";

function transformParames(args: any[]) {
  let reqId = args.pop();
  let fileName = args.pop();
  let message = args
    .map((item) => (typeof item === "object" ? JSON.stringify(item) : item))
    .join(" ");
  return {
    message,
    context: {
      reqId,
      fileName
    },
  };
}
function error(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.error(message, context);
}
function info(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.info(message, context);
}
function debug(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.debug(message, context);
}
function warn(...args: any[]) {
  let { message, context } = transformParames(args);
  logger.warn(message, context);
}

export default {
  info,
  error,
  debug,
  warn,
};
