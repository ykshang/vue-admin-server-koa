// logger.ts
import winston from "winston";
import DailyRotateFile from 'winston-daily-rotate-file';
import {ANSI_CODES, colorizeText } from '@/utils/colorizeText';

// 定义自定义日志格式，添加时间戳和请求ID（如果存在）
const requestAwareFormat = winston.format.printf(
  ({ level, timestamp, reqId, message, fileName }) => {
    const fileNamePart = fileName ? colorizeText(fileName as string, ANSI_CODES.yellow) : "";
    const reqIdPart = reqId ? `[${reqId}] ` : ""; // 体现日志来源：通过请求ID
    return `${timestamp} ${level}: ${reqIdPart}${message} ${fileNamePart}`;
    // return `${timestamp} ${level}: ${reqIdPart}${message}`;
  }
);

// 创建 logger 实例
const logger = winston.createLogger({
  // level: "debug", // 日志级别 error/warn/info/debug
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }), // 添加时间戳
    winston.format.colorize(), // 开发环境可彩色化
    requestAwareFormat // 使用自定义格式
  ),
  transports: [
    // 输出到控制台
    new winston.transports.Console(),
    // 生产环境可以同时输出到文件
    new DailyRotateFile({
      filename: 'logs/app-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '30d',
      format: winston.format.combine(
        winston.format.uncolorize(), // 确保文件日志不包含颜色
      )
    })
  ],
  handleExceptions: true,
  handleRejections: true,
});
export default logger;

