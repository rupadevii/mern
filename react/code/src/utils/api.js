import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const request = error.config

    console.log("error status", error.status, error.response.data.msg)

    if(request.url === "/refresh"){
        return Promise.reject(error)
    }

    if((error.status===403 || error.status==401) && !request._retry){
        request._retry = true

        try{
            const res = await api.post('/auth/refresh')
            console.log(res)
            return api(request)
        }
        catch{
            window.location.href = 'http://localhost:5173/login'
            return
        }
    }
})