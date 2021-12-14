import { useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
// import { logoutUser } from '../../../../firebase';
 import { AuthContext } from "../../../../contexts/AuthContext"
// import { getAuth } from '@firebase/auth';
 import * as authService from "../../../../services/authService"
 
  
 const  Logout=()=>{
     
     const {user, logout} = useContext(AuthContext);
    const historyLogout = useHistory();

    useEffect(() => {
        authService.logout(user.authcookie)
            .then(() => {
                logout();
                historyLogout.push("/")
            })
    }, [])

    return null;



    //  try{
    //    await  logoutUser()

    //       historyLogout.push("/")
       
       
           
       
    // } catch{
    //  alert("Error!")

    //  }

 }
export default Logout

