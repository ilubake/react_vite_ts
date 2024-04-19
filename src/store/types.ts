// types.ts
import { useSelector, TypedUseSelectorHook } from "react-redux"; 
import store from "./store";
import rootReducer from "./rootReducer";

//类型支持
export type RootState = ReturnType<typeof rootReducer>;
// 定义AppDispatch类型const dispatch: AppDispatch = useDispatch();

export type AppDispatch = typeof store.dispatch;

// 选择 Redux store 中的状态，并确保选择的结果具有正确的类型，useTypedSelector(state => state.value);
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
