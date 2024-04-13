import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../views/Layout/index";
import Home from "../views/Home/index";
import User from "../views/User/index";
const GetRouters = () => {
    const routes: React.ReactElement | null = useRoutes([
      { path: "/", element: <Navigate to="/layout/home"></Navigate> },
      {
        path: "/layout",
        element: <Layout />,
        children: [
          {
            path: "user",
            element: <User />,
            index: true,
          },
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ]);
    return routes;
  };
  export default GetRouters  ;