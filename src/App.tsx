import "./App.scss";
import GetRouters from './routes/index'
import AuthRoute from './component/AuthRoute';
function App() {
  return (
    <AuthRoute>
      <GetRouters />
    </AuthRoute>
  );
}
export default App;
