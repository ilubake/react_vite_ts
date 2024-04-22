export interface loginData{
    userName:string;
    password:string;
}

export interface UserData {
    id: string;
    name: string;
    email: string;
    token:string;
  }
export interface loginRes{
    data?:UserData;
    message?:string;
    resCode?:number;
}