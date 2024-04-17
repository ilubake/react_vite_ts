import { useLocation,Navigate } from "react-router-dom";
interface AuthRouteProps{
    children:JSX.Element;
}
function AuthRoute({children}:AuthRouteProps ){
    const token=sessionStorage.getItem('token')as string|null;
    const {pathname}=useLocation();
    console.log('pathname',pathname);
    if (pathname=='/login'||token) {
        return children
    }else{
        return <Navigate to={'/login'} replace></Navigate>
    }
    return children
}
export default AuthRoute