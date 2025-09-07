import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import path from 'path';

// 创建Koa应用实例
const app = new Koa();

// 使用中间件
app.use(bodyParser());

// 创建路由实例
const router = new Router();

// 基本路由示例
router.get('/', (ctx) => {
  ctx.body = 'Hello, Koa Server!';
});

router.get('/api/health', (ctx) => {
  ctx.body = { status: 'OK', timestamp: new Date().toISOString() };
});

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
  console.log(`🚀 Koa server is running at http://localhost:${PORT}`);
  console.log(`➡  Health check endpoint: http://localhost:${PORT}/api/health`);
});

export default app;