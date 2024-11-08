import { createContext, useContext, useMemo } from "react"
import { action, makeAutoObservable, runInAction} from "mobx"
import _ from "lodash"

class AuthContextClass {
	constructor() {
		makeAutoObservable(this)
	}
	public username = ""
	public password = ""
	public postgres_uid = 0
	private _isLoadingAuth = true

	public setUsername = action((username: string) =>{
		this.username = username
	})

	public setPassword = action((password: string) =>{
		this.password = password
	})

	public setPostgresUid = action((uid: number) =>{
		this.postgres_uid = uid
	})

	get isLoggedIn() {
		return !_.isEmpty(this.username) && !_.isEmpty(this.password)
	}

	get isLoadingAuth() {
		return this._isLoadingAuth
	}

	set isLoadingAuth(isLoadingAuth: boolean) {
		this._isLoadingAuth = isLoadingAuth
	}

	public async clearContext() {
		runInAction(() => {
			this.username = ""
			this.password = ""
			this.postgres_uid = 0
		})
		try {
			this.isLoadingAuth = false
		} catch (e) {
			alert("Error logging out")
			return
		}
	}
}

const AuthContext = createContext(new AuthContextClass())

export default function AuthContextProvider ({ children }: { children: React.ReactNode }) {
	const authContext = useMemo(() => new AuthContextClass(), [])

	return (
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
