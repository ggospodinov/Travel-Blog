
import { Link} from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


function Header()
{

  const {user } = useAuthContext();
  
    let userNavigation=(
      <>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/themes">Themes</Link>
     </li> */}
      <li className="nav-item">
      <Link className="nav-link" to="/create-theme">New Theme</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"  to="/profile">{user?.email}</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/logout">Logout</Link>
    </li>

    </>
    );

   let guestNavigation=(
    <>
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home
      <span className="sr-only">(current)</span>
        </Link>
    </li> 
     <li className="nav-item">
        <Link className="nav-link" to="/themes">Themes</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
    </li>
     <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
     </li>
  </>
   )

    return(
        <>
        <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> 

<header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand" ><h2>Travel Forum</h2></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
             
             { user?.email 
             ?userNavigation
             :guestNavigation }
             {/* } */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    </>
    )
}
export default Header