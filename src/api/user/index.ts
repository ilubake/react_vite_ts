import service from "../../utils/request";
import store from "../../store/store";
import { loginData,loginRes } from "./types";
//登录
export function login(data:loginData):Promise<loginRes>{
    if (store.getState().mySlice.isDev) {
        return new Promise((rs,rj)=>{
            rs({token:'asdassssssssdwwwwwwwwwwwrwasd'});
            rj({message:'error'})
        })
    } else {
    return service.post('',data)
    }

}