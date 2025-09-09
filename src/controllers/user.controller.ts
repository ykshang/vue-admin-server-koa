// import { Context } from 'koa';
// import { User, IUser } from '@/ts';
// import dayjs from 'dayjs';

// export class UserController {
//   // 获取所有用户
//   public static async getUsers(ctx: Context): Promise<void> {
//     try {
//       const users = await User.find();
//       ctx.body = {
//         success: true,
//         data: users,
//         timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss')
//       };
//     } catch (error) {
//       ctx.throw(500, (error as Error).message);
//     }
//   }
  
//   // 创建新用户
//   public static async createUser(ctx: Context): Promise<void> {
//     try {
//       const userData: IUser = ctx.request.body as IUser;
//       const newUser = new User(userData);
//       const savedUser = await newUser.save();
      
//       ctx.status = 201;
//       ctx.body = {
//         success: true,
//         data: savedUser,
//         message: 'User created successfully'
//       };
//     } catch (error) {
//       ctx.throw(400, (error as Error).message);
//     }
//   }
  
//   // 获取单个用户
//   public static async getUserById(ctx: Context): Promise<void> {
//     try {
//       const user = await User.findById(ctx.params.id);
//       if (!user) {
//         ctx.throw(404, 'User not found');
//         return;
//       }
      
//       ctx.body = {
//         success: true,
//         data: user
//       };
//     } catch (error) {
//       ctx.throw(500, (error as Error).message);
//     }
//   }
// }