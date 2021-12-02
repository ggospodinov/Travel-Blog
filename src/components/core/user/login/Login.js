import { Link } from "react-router-dom"
import { useHistory } from "react-router";
import background from "./../../../../images/image1.jpg"
import  * as authService from "../../../../services/authService"
import { useContext } from 'react';
import { AuthContext } from "../../../../contexts/AuthContext"


function Login(){
	const { login } = useContext(AuthContext);
	const historyLogin = useHistory()

	const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

		console.log(email);
		console.log(password)

         authService.login(email, password)
            .then((authData) => {
                 login(authData);
			
				 historyLogin.push("/themes");
			
				})       
            .catch(err => {
                 // TODO: show notification
                 console.log(err);
            });
    }


 return(  
     <>  
<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={onLoginHandler} method="POST">
					<span className="login100-form-title p-b-34">
						Account Login
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="first-name" className="input100" type="text" name="email" placeholder="User email"/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input className="input100" type="password" name="password" placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>

					<div className="w-full text-center">
						<Link to="/register" className="txt3">
							Sign Up
						</Link>
					</div>
				</form>

				<div className="login100-more" style={{backgroundImage: `url(${background})`}}></div> 
			</div>
		</div>
	</div>
	
	

	<div id="dropDownSelect1"></div>
    </>
 )
}
export default Login