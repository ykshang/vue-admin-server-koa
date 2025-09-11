// 定义一些常用的 ANSI 颜色代码
const ANSI_CODES = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// 创建一个自定义函数来为文字着色，用于日志输出
export default function colorizeText(text: string, colorCode: string): string {
  // 检查输出环境是否支持颜色（例如，避免在文件输出中写入颜色代码）
  // 这是一个简单的检查，在实际项目中你可能需要更复杂的逻辑来判断 transport 的类型
  if (process.stdout.isTTY) {
    return `${colorCode}${text}${ANSI_CODES.reset}`;
  }
  return text; // 如果不是 TTY（例如文件），则返回无色文本
}