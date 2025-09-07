import Router from '@koa/router';

const router = new Router()

// 基本路由示例
router.get('/', (ctx) => {
  ctx.body = 'Hello, Koa Server!';
});

// 服务端健康检查
router.get('/api/health', async(ctx) => {
  ctx.body = { status: 'OK', message: 'Server is running well', timestamp: new Date().toISOString() };
});
export default router
