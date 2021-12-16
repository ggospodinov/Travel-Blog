import { useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext"
 import * as authService from "../../../../services/authService"
 
  
 const  Logout=()=>{
     
     const {user, logout} = useContext(AuthContext);
    const historyLogout = useHistory();

    useEffect(() => {
        authService.logout(user['user-token'])
            .then(() => {
                logout();
                historyLogout.push("/")
            })
    }, [])

    return null;

 }
export default Logout

