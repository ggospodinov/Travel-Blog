import { createContext,useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
 
    objectId:'',
    
   };
  


export const AuthProvider=({children })=>{
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    
   const loginUser= (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };
 


    return (
        <AuthContext.Provider value={{user,loginUser,logout, isAuthenticated: user.email}}>
         {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);
    console.log(authState)

    return authState;
}