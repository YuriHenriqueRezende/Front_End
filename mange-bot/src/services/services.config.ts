import axios from "axios";
import { create } from "node_modules/axios/index.cjs";

export const getAxios = ()=>{
    const createdAxios = axios.create({
        baseURL: "https://mange-make-bot.azurewebsites.net/api",
        timeout: 40000,
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: 'Bearer meu token'
        }
    });
    createdAxios.interceptors.response.use(getAxiosResponse);
    return createdAxios;
}

const getAxiosResponse =