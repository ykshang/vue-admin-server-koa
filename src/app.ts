import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import path from 'path';
import router from './routers';
import { connectDB } from './config/database';

// 启动时连接数据库
connectDB()
  .then(() => {
    console.log('数据库连接已就绪 ✅')
  })
  .catch((err) => {
    console.error('❌ 数据库连接失败，错误信息：', err)
    // process.exit(1) // 如果连接失败，退出应用
  })

// 创建Koa应用实例
const app = new Koa();

// 使用中间件
app.use(bodyParser());

// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 静态文件服务
const staticPath = path.join(__dirname, '../public');
app.use(serve(staticPath));

// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {  // 为err添加类型声明  
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message,
      status: ctx.status
    };
    console.error('Server Error:', err);
  }
});

// 服务器端口配置
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// 启动服务器
app.listen(PORT, () => {
  console.log(`Koa 启动成功：http://localhost:${PORT}`, '🚀');
  console.log(`服务健康检查点: http://localhost:${PORT}/api/health`, '🚀');
});

export default app;