// types.ts
import { useSelector, TypedUseSelectorHook } from "react-redux"; 
import store from "./store";
import {MySliceState} from './slice/mySlice/types'
// 定义根状态接口
export interface RootState {
    mySlice: MySliceState;
}
//类型支持
// AppDispatch类型dispatch: AppDispatch = useDispatch();

export type AppDispatch = typeof store.dispatch;

// 选择器类型 useTypedSelector(state => state.value);
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
