import { Context } from 'koa';

export default async function errorHandler(ctx: Context, next: () => Promise<any>) {
  try {
    await next();
  } catch (err: any) {
    // 统一处理mongoose校验错误
    if (err.name === 'ValidationError') {
      ctx.status = 422;
      ctx.body = { 
        code: 1001,
        message: '数据校验失败: ' + Object.values(err.errors).map((e: any) => e.message).join('; ')
      };
    }
    // 处理MongoDB唯一索引冲突
    else if (err.code === 11000) {
      ctx.status = 409;
      ctx.body = {
        code: 1002, 
        message: '数据已存在，请避免重复创建',
        field: Object.keys(err.keyPattern)[0],
      };
    }
    // 其他未处理错误
    else {
      ctx.status = err.status || 500;
      ctx.body = {
        code: err.code || 500,
        message: err.message || '服务器内部错误'
      };
    }
    ctx.app.emit('error', err, ctx);
  }
}