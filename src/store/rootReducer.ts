// rootReducer.ts

import mySliceReducer from './slice/mySlice';

type RootReducer = {
  demoSlice: typeof mySliceReducer;
  // 其他子reducer...
};

const rootReducer: () => RootReducer = () => ({
  demoSlice: mySliceReducer,
  // 其他子reducer...
});

export default rootReducer;