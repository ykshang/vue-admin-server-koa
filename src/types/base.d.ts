// src/types/index.ts 或类似位置
import { Context } from 'koa';

// 扩展你的自定义 Context 类型
interface CustomContext extends Context {
  state: {
    user?: { // 例如，添加了用户信息
      id: number;
      username: string;
    };
  };
  // 可以添加其他自定义属性或重写已有属性的类型
}

interface extFieldDocument {
  extField1?: string;
  extField2?: string;
  extField3?: string;
  extField4?: string;
  extField5?: string;
  extField6?: string;
  extField7?: string;
  extField8?: string;
  extField9?: string;
  extField10?: string;
}