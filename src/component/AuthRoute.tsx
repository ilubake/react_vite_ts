import route_items from "../routes/routeConfig";
import type { CustomRouteItem } from "../routes/routeConfig";
import { useLocation, Navigate } from "react-router-dom";
import{getToken}from '@utils/cookies'
interface AuthRouteProps {
  children: JSX.Element;
}
function findChildByKey(
  routeItems: CustomRouteItem[],
  targetKey: string
): CustomRouteItem | undefined {
  for (const item of routeItems) {
    if (item.key === targetKey) {
      return item;
    }
    if (item.children && item.children.length > 0) {
      const foundInChildren = findChildByKey(item.children, targetKey);
      if (foundInChildren !== undefined) {
        return foundInChildren;
      }
    }
  }

  return undefined;
}
function AuthRoute({ children }: AuthRouteProps) {
  const token = getToken();
  const { pathname } = useLocation();
  console.log(pathname);
  const pass = findChildByKey(route_items, pathname.split("/").slice(-1)[0])
    ?.meta?.isNoPassAuth;

  if (pass || token) {
    return children;
  } else {
    return <Navigate to={"/login"} replace></Navigate>;
  }
}
export default AuthRoute;
