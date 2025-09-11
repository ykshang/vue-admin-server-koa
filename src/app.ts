import dotenv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import path from "path";

import router from "@/routers";
import { connectDB } from "@/config/database";
import errorHandler from '@/middlewares/errorHandler';
import requestId from '@/middlewares/requestId';
import loggerMiddleware from '@/middlewares/logger'; // 导入我们刚创建的日志中间件
import logger from "./utils/logger";

// 读取环境变量
dotenv.config();

// 创建Koa应用实例
const app = new Koa();

// 中间件注册（需在路由之前）
app.use(errorHandler); // 错误处理中间件

// 为每个请求生成一个唯一的 ID
app.use(requestId);

// 日志中间件
app.use(loggerMiddleware);

// 使用中间件解析body请求体
app.use(bodyParser());

// 静态文件服务
const staticPath = path.join(__dirname, "../public");
app.use(serve(staticPath));

// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

async function startServer() {
  try {
    // 获取最大重试次数
    const RETRY_COUNT = process.env.RETRY_COUNT ? parseInt(process.env.RETRY_COUNT, 10) : 5;

    let retryCount = 0;
    // 启动时连接数据库
    await connectDB()
      .then(() => {
        logger.info("数据库连接已就绪", "✅");
      })
      .catch((err) => {
        retryCount ++;
        if (retryCount <= RETRY_COUNT) {
          logger.info(`正在重试第 ${retryCount} 次连接...`);
          setTimeout(connectDB, 3000); // 5秒后重试
        } else {
          logger.error("❌ 数据库连接失败，已达到最大重试次数，退出应用...");
          process.exit(1);
        }
      });
    logger.info('正在启动 Koa 应用。。。', '🕘')
    // 获取服务器端口配置
    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    // 启动 Koa 服务器  
    app.listen(PORT, () => {
      logger.info('Koa 应用启动成功', "✅");
      logger.info(`服务根地址 ➡  http://localhost:${PORT}`, "🚀");
      logger.info(`服务健康检查点 ➡  http://localhost:${PORT}/api/health`, "🚀");
    });
  } catch {
    // 重试连接
    setTimeout(connectDB, 5000); // 5秒后重试
  }
}

startServer();
export default app;
