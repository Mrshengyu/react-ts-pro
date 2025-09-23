// 封装axios请求
import axios from 'axios';

const httpInstance = axios.create({
    baseURL: 'http://geek.itheima.net',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});


// 请求拦截器
httpInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response;
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export { httpInstance };