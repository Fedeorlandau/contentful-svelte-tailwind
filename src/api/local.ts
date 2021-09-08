import axios from "axios";

const local = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string
})

export default local;