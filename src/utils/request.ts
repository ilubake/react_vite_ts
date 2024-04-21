import { Result } from "./types";
import { getToken,removeToken} from "./cookies";
import axios,{AxiosRequestConfig,AxiosError} from "axios";
import showMessage from "./showMessage";
const service = axios.create({
    baseURL: 'api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  // 添加请求拦截器
  service.interceptors.request.use(function (config) {
    if (getToken()) {
      config.headers!['Authorization'] = `Bearer ${getToken()}`; // 注意使用非空断言运算符
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    const data=response?.data;
    if (data?.resCode===0) {
      return data;
    } else {
     return Promise.reject(data);
    }
  }, function (error:AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error?.response?.status) {
      switch (error.response.status) {
        case 401://jwt过期
        removeToken();
        window.location.replace('/login');
        showMessage('登录状态失效，请重新登录');
          //重新登录relogin()
          break;
      
        default:
          break;
      }
    }
    return Promise.reject(error);
  });
  export default service;

  export const http={
    get(url: string, config?: AxiosRequestConfig):Promise<Result>{
      return service.get(url,config)
    },
    post(url: string, data?:object, config?: AxiosRequestConfig): Promise<Result>{
      return service.post(url,data,config) 
    },
  }