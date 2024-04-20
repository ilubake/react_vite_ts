export interface loginData{
    userName:string;
    password:string;
}

export interface UserData {
    id: string;
    name: string;
    email: string;
  }
export interface loginRes{
    data?:UserData;
    token?:string;
    message?:string;
}