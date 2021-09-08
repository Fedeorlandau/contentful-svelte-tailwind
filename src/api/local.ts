import axios from "axios";

const local = axios.create({
    baseURL: import.meta.env.DEV ? 'https://localhost:300' : import.meta.env.BASE_URL as string
})

export default local;