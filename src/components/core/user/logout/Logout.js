import {  useEffect} from 'react'
import { useHistory } from "react-router-dom";

import { useAuthContext } from "../../../../contexts/AuthContext"
 import * as authService from "../../../../services/authService"
 
  
 const  Logout=()=>{
     
     const {user, logout} = useAuthContext();
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

