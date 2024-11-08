import React from "react"
import AuthContextProvider from "./Contexts/AuthContext"
import AppRoutes from "./AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<AppRoutes/>
			</Router>
		</AuthContextProvider>
	)
}

export default App
