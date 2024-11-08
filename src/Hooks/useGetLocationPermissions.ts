import { useEffect } from "react"

function useGeolocationPermission(onPrompt:() => void) {
	useEffect(() => {
		const checkGeolocationPermission = async () => {
			if (navigator.permissions && navigator.permissions.query) {
				const result = await navigator.permissions.query({ name: "geolocation" })
				if (result.state === "prompt" && typeof onPrompt === "function") {
					navigator.geolocation.getCurrentPosition(() => onPrompt())
				}
			}
		}

		checkGeolocationPermission()
	}, [onPrompt])
}

export default useGeolocationPermission
