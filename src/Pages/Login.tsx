import {observer} from "mobx-react-lite";
import TextInputBox from "../Components/TextInputBox";

function Login(){
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <TextInputBox
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextInputBox
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {/*{error && <p className="text-red-500 text-sm">{error}</p>}*/}
            {/*<Button type="submit" className="w-full">Login</Button>*/}
        </form>
    )
}


export default observer(Login);
