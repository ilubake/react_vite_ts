// 用户数据模型

export interface UserData {
  id: string;
  name: string;
  email: string;
  token?: string;
}
// 定义YourSlice的state结构
export interface InitialSliceState {
  initialData?: UserData;
  loading: boolean;
  error: string | null;
}
