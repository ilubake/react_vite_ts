import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // 或其他HTTP库
import { mySliceDataItem, mySliceState } from "./types";

const initialState: mySliceState = {
  data: null,
  loading: false,
  error: null,
};

// 用于创建处理异步操作的Thunk action。createAsyncThunk接收两个主要参数：typePrefix: 字符串表示这是一个与mySlice相关的异步操作，用于获取数据,Redux Toolkit会基于这个前缀自动创建三种不同类型的action，分别对应异步操作的pending、fulfilled和rejected状态。payloadCreator: 异步函数，负责执行实际的异步操作。当dispatch这个Thunk action时，会调用此函数。此函数应返回一个Promise，Promise的resolve结果将作为fulfilled action的payload，reject原因将作为rejected action的payload。 /定义了一个名为fetchYourData的异步Thunk action，当dispatch这个action时，它会触发以下过程： 发送一个GET请求到https://api.example.com/data。 请求过程中，Redux store会接收到一个类型为mySlice/fetchYourData/pending的action，表示异步操作正在进行。 如果请求成功，Redux store会接收到一个类型为mySlice/fetchYourData/fulfilled的action，其payload包含服务器返回的数据。 如果请求失败，Redux store会接收到一个类型为mySlice/fetchYourData/rejected的action，其payload包含错误信息。 在mySlice.ts的extraReducers部分，已经为这三个由fetchYourData生成的action定义了对应的reducer逻辑，以更新state的loading、data和error属性。这样，组件可以通过订阅这些state的变化来相应地展示加载状态、数据内容或错误提示。/
export const fetchYourData = createAsyncThunk(
  "mySlice/fetchYourData",
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
    setData: (state, action: PayloadAction<mySliceDataItem[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchYourData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchYourData.fulfilled,
        (state, action: PayloadAction<mySliceDataItem[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchYourData.rejected,
        (state, action: PayloadAction<unknown>) => {
          // 更新state以处理拒绝情况
          state.error = extractErrorMessage(action.payload);
          state.loading = false;
        }
      );
  },
});

export const { setData, setLoading, setError } = mySlice.actions;
// 将mySlice.reducer导出为mySliceReducer
export const mySliceReducer = mySlice.reducer;
export default mySliceReducer;
