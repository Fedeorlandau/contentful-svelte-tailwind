import axios from "axios";

const local = axios.create({
    baseURL: import.meta.env.DEV ? 'http://localhost:3000' : import.meta.env.BASE_URL as string
})

export default local;