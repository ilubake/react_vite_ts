import { loginRes  } from "../../../api/user/types";
// 用户数据模型

// 定义YourSlice的state结构
export interface InitialSliceState {
  isDev:boolean;
  data?: loginRes;
  loading: boolean;
  error: string | null;
}
