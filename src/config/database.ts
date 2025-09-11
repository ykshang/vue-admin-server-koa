import logger from '@/utils/logger';
import mongoose from 'mongoose'

// 数据库连接配置
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vue-admin';

// 连接状态
let isConnected = false

// 封装连接函数
const connectDB = async (): Promise<void> => {
  if (isConnected) {
    logger.warn('数据库已成功连接，无需重复连接', '💡')
    return
  }

  try {
    // 连接数据库
    await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true,      // 这些选项在 Mongoose 6 中已不再需要
      // useUnifiedTopology: true,
    })

    isConnected = true
    logger.info('数据库连接成功', '✅')
  } catch (err) {
    logger.error('数据库连接失败，错误信息：', err, '❌')
  }
}

// 监听连接事件
mongoose.connection.on('connected', () => {
  logger.info('MongoDB client 已连接', '✅')
})

mongoose.connection.on('error', (err) => {
  logger.error('MongoDB client 检测到运行时错误：', err, '❌')
})

mongoose.connection.on('disconnected', () => {
  logger.error('MongoDB client 连接已断开...', '🧷')
  isConnected = false
})
mongoose.connection.on('reconnected', () => {
  logger.info('MongoDB client 重新连接成功...', '✅')
});

// 导出连接函数和 mongoose 实例
export { connectDB }
