import {Routes, Route} from "react-router-dom"
import React from "react"
import Landing from "./Pages/Landing"


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Landing/>} />
		</Routes>
	)
}
