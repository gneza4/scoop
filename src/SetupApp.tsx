import {observer} from "mobx-react-lite"
import useGeolocationPermission from "./Hooks/useGetLocationPermissions"
import useRedirectUnauthorizedUser from "./Hooks/useRedirectUnauthorizedUser";

function SetupApp() {
	// useGeolocationPermission();
	useRedirectUnauthorizedUser()
	return (
		<div>

		</div>
	)
}

export default observer(SetupApp)
