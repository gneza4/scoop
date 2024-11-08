import axios from "axios"
import Config from "../../env";

const http = axios.create({
    baseURL: Config.BASE_URL,
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
