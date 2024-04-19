// 用户数据模型
export interface UserData {
  id: string;
  name: string;
  email: string;
}

// 定义YourSlice的state结构
export interface MySliceState {
  isDev:boolean;
  data: UserData[] | null;
  loading: boolean;
  error: string | null;
}
