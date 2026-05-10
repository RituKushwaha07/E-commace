import axios from "axios";

const api  = axios.create({
    baseURL: 'https://e-commace-backe.vercel.app/api',
})

export default api;