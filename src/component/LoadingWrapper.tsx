import { Suspense,} from "react";
import { Spin } from "antd";

function LazyLoadingWrapper(LazyComponent: JSX.Element) {
  return (
    <Suspense fallback={<Spin size="large" spinning />}>
      {LazyComponent}
    </Suspense>
  );
}
// 假设 UserSettings 和 UserProfile 是需要懒加载的子组件
export default LazyLoadingWrapper;