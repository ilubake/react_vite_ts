import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginData } from "../../../api/user/types";
import { login } from "../../../api/user";
import { RootState } from "../../rootTypes";
const initialState: RootState["initialSlice"] = {
  initialData: {
    id: "",
    name: "",
    email: "",
    token: "",
  },
  loading: false,
  error: null,
};
//typePrefix: 字符串表示这是一个与initialSlice相关的异步操作，用于获取数据,Redux Toolkit会基于这个前缀自动创建三种不同类型的action，分别对应异步操作的pending、fulfilled和rejected状态。payloadCreator: 异步函数，负责执行实际的异步操作。当dispatch这个Thunk action时，会调用此函数。此函数应返回一个Promise，Promise的resolve结果将作为fulfilled action的payload，reject原因将作为rejected action的payload。 /
export const userLogin = createAsyncThunk(
  "initialSlice/userLogin", // 唯一标识
  async (credentials: loginData) => {
    try {
      const response = await login(credentials);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(extractErrorMessage(error));
    }
  }
);
function extractErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "message" in error) {
    return (error as { message: string }).message;
  }
  return "出现了未知错误信息";
}
const initialSlice = createSlice({
  name: "initialSlice", //生成的action前缀
  initialState,
  reducers: {
    // 同步action
    setData: (state, action) => {
      state.initialData = action.payload;
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
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { data } = action.payload;
        console.log("action.payload", data);
        state.initialData = data;
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        // 更新state以处理拒绝情况
        state.error = extractErrorMessage(action.payload);
        state.loading = false;
      });
  },
});
export const selectInitialSlice = (state: RootState) => state.initialSlice;
export const { setData, setLoading, setError } = initialSlice.actions;
// 将initialSlice.reducer导出为initialSliceReducer
export const initialSliceReducer = initialSlice.reducer;
export default initialSliceReducer;
