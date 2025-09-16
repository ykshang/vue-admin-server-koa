import { Context } from 'koa';

/**
 * 错误处理中间件
 * @description 捕获应用程序中的错误并返回统一的错误响应
 * @param ctx Koa上下文对象
 * @param next 下一个中间件函数
 */
export default async function(ctx: Context, next: () => Promise<any>) {
  try {
    await next();
  } catch (err: any) {
    // 统一处理mongoose校验错误
    if (err.name === 'ValidationError') {
      ctx.status = 422;
      ctx.body = {
        success: false,
        code: 1001,
        message: '数据校验失败: ' + Object.values(err.errors).map((e: any) => e.message).join('; ')
      };
    }
    // 处理MongoDB唯一索引冲突
    else if (err.code === 11000) {
      ctx.status = 409;
      ctx.body = {
        success: false,
        code: 1002, 
        message: '数据已存在，请避免重复创建',
        field: Object.keys(err.keyPattern)[0],
      };
    }
    // 其他未处理错误
    else {
      console.log('未处理错误:', err.code);
      // 修复：保留原始错误状态码，仅在没有状态码时设为500
      ctx.status = err.status || 500;
      ctx.body = {
        success: false,
        code: err.code || err.status || 500,
        message: err.message || '服务器内部错误',
        result: err.result || null,
      };
    }
    ctx.app.emit('error', err, ctx);
  }
}