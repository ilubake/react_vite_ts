// 定义您的数据项接口
export interface mySliceDataItem {
  userId: number;
  userName: string; // 其他属性...
}

// 定义YourSlice的state结构
export interface mySliceState {
  data: mySliceDataItem[] | null;
  loading: boolean;
  error: string | null;
}
