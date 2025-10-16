import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {

    }
})

const authApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_URL,
})

export { api, authApi }