import "./App.scss";
import GetRouters from './routes/index'
import AuthRoute from './component/AuthRoute';
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
    <AuthRoute>
      <GetRouters />
    </AuthRoute>
    </Provider>
  );
}
export default App;
