import axios from "axios";

const local = import.meta.env.DEV ? axios.create({
    baseURL: 'http://localhost:3000'
}) : axios

export default local;