import axios, { type AxiosResponse } from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const getAxios = ()=> {
    const createAxios = axios.create({
        baseURL:"http://localhost:3000/",
        timeout: 40000,
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: `Bearer meu token...`,
        }
    });
    createAxios.interceptors.response.use(getAxiosResponse);
    return createAxios;
}

const getAxiosResponse = (response: AxiosResponse)=>{
    return response.data;
}