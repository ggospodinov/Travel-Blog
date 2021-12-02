
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
import { useState } from 'react';



function App() {

  const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
  };
  
  const [user, setUser] = useState({});

  const login = (authData) => {
    setUser(authData);
  }
 
  
//   const routes = {
//     'themes': <ViewImg  />,
//     // 'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
//     // 'create-game': <CreateGame />,
//     // 'login': <Login />,
//     // 'register': <Register />,
//     // 'details': <GameDetails id={argument} />
// }
  return (
 <AuthContext.Provider value={{user, login}}>

  <>
    <Header/>
     
    
    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/themes"  component={AllThemes} />
                    <Route path="/login"  component={Login} />
                    <Route path="/register"  component={Register} />
                    <Route path="/theme"  component={Theme} />
                    <Route path="/create-theme"  component={CreateTheme} />
                    <Route path="/profile"  component={Profile} />


                    {/* <Route path="/games" exact component={GameCatalog} />
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/games/:gameId" component={GameDetails} />
                    <Route path="/custom">
                    <h2>Custom Page</h2>
                    <p>dasklfjasldf </p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                      console.log('Logged Out!!!');
                      
                      return <Redirect to="/" />
                    }} />  */}
                </Switch>
    <Footer/>
</>
 </AuthContext.Provider >

  );
}

export default App;
