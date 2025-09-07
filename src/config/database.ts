import mongoose from 'mongoose'

// 数据库连接配置
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo';

// 连接状态
let isConnected = false

// 封装连接函数
const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('💡 数据库已成功连接，无需重复连接')
    return
  }

  try {
    // 连接数据库
    await mongoose.connect(MONGODB_URI, {
      // useNewUrlParser: true,      // 这些选项在 Mongoose 6 中已不再需要
      // useUnifiedTopology: true,
    })

    isConnected = true
    console.log('数据库连接成功 ✔')
  } catch (err) {
    console.error('❌ 数据库连接失败，错误信息：', err)
  }
}

// 监听连接事件
mongoose.connection.on('connected', () => {
  console.log('MongoDB client 已连接', '✔')
})

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB 发生运行时错误，错误信息：', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB client 连接已断开...', '🔗')
  isConnected = false
})
mongoose.connection.on('reconnected', () => {
  console.info('MongoDB 重新连接成功...', '✔')
});

// 导出连接函数和 mongoose 实例
export { connectDB, mongoose as default }
