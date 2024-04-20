//封装antdModal进行消息提示
interface modalProps{
    types?:string;
    isBtn?:boolean;
}
const showMessage=(message:string,type?:string,date?:modalProps)=>{
    console.log(message,type||'info',date);
    //...//
}
export default showMessage;