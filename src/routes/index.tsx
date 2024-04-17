import React from "react";
import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import route_items from "./routeConfig";
import type { CustomRouteItem } from "./routeConfig";
// 将 CustomRouteItem 数组转换为 RouteObject 数组
function mapToRouteObjects(customRoutes: CustomRouteItem[]): RouteObject[] {
  return [
    ...customRoutes.map((item) => {
      return {
        path: item.key,
        element: item.component,
        children: item.children ? mapToRouteObjects(item.children) : undefined,
      };
    }),
  ];
}
// 创建路由配置
const GetRouters = (): React.ReactElement | null => {
  // 添加默认导航至 "/layout/home"
  const defaultRoute: RouteObject = {
    path: "/",
    element: <Navigate to="/layout/home" replace />,
  };
  // 添加OffRouter页面404"
  const offRouter: RouteObject = {
    path: "*",
    element: <Navigate to="/offRouter" replace />,
  };

  // 转换自定义路由为 RouteObject
  const routeObjects = mapToRouteObjects(route_items);

  // 将默认路由添加到路由对象数组的开头
  const allRouteObjects = [defaultRoute,offRouter, ...routeObjects];

  // 使用 useRoutes 钩子来处理路由配置
  const routes = useRoutes(allRouteObjects);
  console.log(routes);
  return routes;
};

export default GetRouters;
