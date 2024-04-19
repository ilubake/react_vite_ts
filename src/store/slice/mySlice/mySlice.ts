import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // 或其他HTTP库
import {RootState}from '../../rootTypes';
// import{RootState} from '../rootReducer';
const initialState: RootState['mySlice'] = {
  isDev:true,
  data: null,
  loading: false,
  error: null,
};

// createAsyncThunk接收两个主要参数：typePrefix: 字符串表示这是一个与mySlice相关的异步操作，用于获取数据,Redux Toolkit会基于这个前缀自动创建三种不同类型的action，分别对应异步操作的pending、fulfilled和rejected状态。payloadCreator: 异步函数，负责执行实际的异步操作。当dispatch这个Thunk action时，会调用此函数。此函数应返回一个Promise，Promise的resolve结果将作为fulfilled action的payload，reject原因将作为rejected action的payload。 /
export const fetchData  = createAsyncThunk(
  "mySlice/fetchData ",
  async () => {
    const response = await axios.get("https://api.example.com/data");
    return response.data;
  }
);
function extractErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "message" in error) {
    return (error as { message: string }).message;
  }
  return "出现了未知错误信息";
}
const mySlice = createSlice({
  name: "mySlice", //生成的action前缀
  initialState,
  reducers: {
    // 同步action
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData .pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchData .fulfilled,
        (state, action) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchData .rejected,
        (state, action) => {
          // 更新state以处理拒绝情况
          state.error = extractErrorMessage(action.payload);
          state.loading = false;
        }
      );
  },
});
export const selectDev = (state: RootState) => {console.log(state); return state.mySlice.isDev};
// export const selectMySlice = (state:RootState) => {
//   console.log(state);
//   return state.mySlice};
export const { setData, setLoading, setError } = mySlice.actions;
// 将mySlice.reducer导出为mySliceReducer
export const mySliceReducer = mySlice.reducer;
export default mySliceReducer;
