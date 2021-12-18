
import { Route ,Switch } from 'react-router-dom';
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import { AuthProvider } from './contexts/AuthContext';
import Home from "./components/Home";
import AllThemes from './components/themes/all-Themes/All-themes';
import Login from './components/core/user/login/Login';
import Register from './components/core/user/register/Register';
import Theme from './components/themes/Theme'
import CreateTheme from './components/themes/create-theme/Create-theme';
import Profile from './components/core/user/profile/Profile';
import Logout from './components/core/user/logout/Logout';
import ThemesDetails from './components/themes/oneThemesDetals/Themes-Details'




function App() {
  
   

  
 

 



  return (

<AuthProvider>
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
                    <Route path ="/details/:objectId" component={ThemesDetails} />             
                </Switch>
    <Footer/>
</>
</AuthProvider>


  );
}

export default App;
