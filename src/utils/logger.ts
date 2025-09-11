// logger.ts
import winston from "winston";

// 定义自定义日志格式，添加时间戳和请求ID（如果存在）
const requestAwareFormat = winston.format.printf(
  ({ level, message, timestamp, reqId }) => {
    const reqIdPart = reqId ? `[${reqId}] ` : ""; // 体现日志来源：通过请求ID
    return `${timestamp} ${level}: ${reqIdPart}${message}`;
  }
);

// 创建 logger 实例
const logger = winston.createLogger({
  level: "info", // 日志级别
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }), // 添加时间戳
    winston.format.colorize(), // 开发环境可彩色化
    requestAwareFormat // 使用自定义格式
  ),
  transports: [
    // 输出到控制台
    new winston.transports.Console(),
    // 生产环境可以同时输出到文件
    new winston.transports.File({
      filename: "logs/app.log",
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }), // 添加时间戳
        winston.format.uncolorize(), // 开发环境可彩色化
        requestAwareFormat
      ),
    }),
  ],
});

export default logger;
