import service from "../../utils/request";
// import store from "../../store/store";
import { loginData,loginRes } from "./types";
//登录
export function login(data:loginData):Promise<loginRes>{
    if (window.isDev) {
        return new Promise((rs)=>{
            if (data.password=='12345') {
            rs({
                data:{
                    id: '86546552',
                    name: 'jude',
                    email: '123@sd.com',
                },
                token:'asdfffffffffdsfds',
                message:'Success',
            });

          }else {
            rs({message:'error'})
            }
        })
    } else {
    return service.post('',data)
    }

}