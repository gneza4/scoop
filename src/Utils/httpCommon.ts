import axios from "axios"
import config from "../../env";

const http = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})

http.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem("accessToken")

    if (accessToken) config.headers["authorization"] = accessToken

    return config
})

export default http
