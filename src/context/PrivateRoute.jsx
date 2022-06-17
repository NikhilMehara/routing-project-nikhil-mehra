import { useContext } from "react"
import {Link} from 'react-router-dom'
import { AuthContext } from "./AuthContext";

export const PrivateRoute = ({children}) =>{

    const [state] = useContext(AuthContext);

    if(!state.isAuth){
        return (
            <div style={{marginBottom:"60vh"}}>
                <h3>
                    Please Login First
                </h3>
                <p>
                    <Link to="/login">Here...</Link>
                </p>
            </div>
        )
    }
    return children;
}