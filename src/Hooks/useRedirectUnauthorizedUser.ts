import _ from "lodash"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function useRedirectUnauthorizedUser (): void {
    const navigate = useNavigate()
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken")
        if (_.isNull(accessToken)) navigate("/")
    }, [navigate])
}
