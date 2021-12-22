
import { Route ,Switch } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext'
import { AuthProvider } from './contexts/AuthContext';
import Notification from './components/Common/Notification/Notification';

import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import Home from "./components/Home";
import AllThemes from './components/themes/all-Themes/All-themes';
import Login from './components/core/user/login/Login';
import Register from './components/core/user/register/Register';
import Theme from './components/themes/Theme'
import CreateTheme from './components/themes/create-theme/Create-theme';
import Profile from './components/core/user/profile/Profile';
import Logout from './components/core/user/logout/Logout';
import ThemesDetails from './components/themes/oneThemesDetals/Themes-Details'
import CommentPost from './components/themes/Comment/Comment'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  
  
  return (

<AuthProvider>
  <NotificationProvider>

  <>
    <Header/>   
    <Notification/> 
    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/themes"  component={AllThemes} />
                    <Route path="/login"  component={Login} />
                    <Route path="/logout"  component={Logout}  />
                    <Route path="/register"  component={Register} />
                  
                    <Route  path ="/details/:objectId" component={ThemesDetails}  /> 
                    <Route  path="/theme"  component={Theme}  />
                    <Route  path ="/details/:objectId" component={CommentPost} /> 
                    <Route path="/create-theme"  component={CreateTheme}   />
                    <Route  path="/profile"  component={Profile} />                         
                  
    </Switch>
    <Footer/>
</>
  </NotificationProvider>
</AuthProvider>


  );
}

export default App;
