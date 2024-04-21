import Cookies from "js-cookie";
const tookenKey:string='tookenKey';
export function setToken(tookenKeyValue:string) {
    Cookies.set(tookenKey,tookenKeyValue);
}
export function getToken() {
    return Cookies.get(tookenKey);
}
export function removeToken() {
    return Cookies.remove(tookenKey);
}