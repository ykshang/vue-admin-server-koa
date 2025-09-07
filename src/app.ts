import dotenv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import path from "path";
import router from "./routers";
import { connectDB } from "./config/database";

// 读取环境变量
dotenv.config();

// 创建Koa应用实例
const app = new Koa();

// 使用中间件解析body请求体
app.use(bodyParser());

// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 静态文件服务
const staticPath = path.join(__dirname, "../public");
app.use(serve(staticPath));

// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    // 为err添加类型声明
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message,
      status: ctx.status,
    };
    console.error("Server Error:", err);
  }
});

async function startServer() {
  try {
    // 获取最大重试次数
    const RETRY_COUNT = process.env.RETRY_COUNT ? parseInt(process.env.RETRY_COUNT, 10) : 5;

    let retryCount = 0;
    // 启动时连接数据库
    await connectDB()
      .then(() => {
        console.log("数据库连接已就绪", "✅");
      })
      .catch((err) => {
        retryCount ++;
        console.error("❌ 数据库连接失败，错误信息：", err);
        if (retryCount <= RETRY_COUNT) {
          console.log(`正在重试第 ${retryCount} 次连接...`);
          setTimeout(connectDB, 3000); // 5秒后重试
        } else {
          console.error("❌ 数据库连接失败，已达到最大重试次数，退出应用...");
          process.exit(1);
        }
      });
    console.log('正在启动 Koa 应用。。。', '🚀')
    // 获取服务器端口配置
    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    // 启动 Koa 服务器  
    app.listen(PORT, () => {
      console.log('Koa 应用启动成功', "✅");
      console.log(`服务根地址 ➡  http://localhost:${PORT}`, "🌐");
      console.log(`服务健康检查点 ➡  http://localhost:${PORT}/api/health`, "🌐");
    });
  } catch {
    // 重试连接
    setTimeout(connectDB, 5000); // 5秒后重试
  }
}

startServer();
export default app;
