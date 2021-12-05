
import { Route ,Switch } from 'react-router-dom';
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import { AuthContext } from './contexts/AuthContext';
// import ViewImg from "./components/core/ViewImg/ViewImg";
import Home from "./components/Home";
import AllThemes from './components/themes/All-themes';
import Login from './components/core/user/login/Login';
import Register from './components/core/user/register/Register';
import Theme from './components/themes/Theme'
import CreateTheme from './components/themes/create-theme/Create-theme';
import Profile from './components/core/user/profile/Profile';
//  import { useState } from 'react';
import Logout from './components/core/user/logout/Logout';
// import {useAuth} from './firebase'
import useLocalStorage from './hooks/useLocalStorage';

const initialAuthState = {
      
  usertoken: ''
 };


function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);


 


   const loginUser= (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };


  // const currentUser =useAuth();
  // // const initialAuthState = {
     
  // //   objectId: '',
  // //   userToken: ''
  // // };
  
 


  //  const loginIn = (authData) => {
  //   setUser(authData);
  // }

  //  const logout = () => {
  //  currentUser(initialAuthState);
   
  //  };
 
  

  return (
 <AuthContext.Provider value={{user,loginUser, logout}}>

  <>
    <Header/>
     
    
    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/themes"  component={AllThemes} />
                    <Route path="/login"  component={Login} />
                    <Route path="/logout"  component={Logout}  />
                    <Route path="/register"  component={Register} />
                    <Route path="/theme"  component={Theme} />
                    <Route path="/create-theme"  component={CreateTheme} />
                    <Route path="/profile"  component={Profile} />


                   
                </Switch>
    <Footer/>
</>
 </AuthContext.Provider >

  );
}

export default App;
