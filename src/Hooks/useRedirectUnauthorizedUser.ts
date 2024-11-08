import _ from "lodash"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useAuthContext} from "../Contexts/AuthContext";

export default function useRedirectUnauthorizedUser (): void {
    const navigate = useNavigate()
    const authContext = useAuthContext()
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken")
        if (_.isNull(accessToken)) navigate("/")
    }, [navigate])
}
