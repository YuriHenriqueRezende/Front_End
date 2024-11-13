import axios from "axios";

export const getAxios = ()=> {
    const createAxios = axios.create({
        baseURL:"http://localhost:3000/images",
        timeout: 40000,
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: 'Bearer meu token...',
        }
    })
}
