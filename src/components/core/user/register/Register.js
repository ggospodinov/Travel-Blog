import { useHistory } from "react-router-dom";
import * as authService from '../../../../services/authService';
import { useAuthContext } from '../../../../contexts/AuthContext'
import background from "./../../../../images/image3.jpg"

   function Register(){
	const historyRegister= useHistory()
	
	 const { loginUser } = useAuthContext();

 const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {  email,username, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register( email,username, password )   
           .then(authData => {
               loginUser(authData);
                
                historyRegister.push("/themes")
            });
    }

 return(
<body className="form-v9">
	<div className="page-content">
		<div className="form-v9-content" style={{backgroundImage: `url(${background}`}}>
			<form className="form-detail" action="/register" method="POST"  onSubmit={registerSubmitHandler}>
				<h2>Registration Form</h2>
				<div className="form-row-total">
					<div className="form-row">
						<input type="text" name="email" id="email" className="input-text" placeholder="Your Email" required />
					</div>
					<div className="form-row">
						<input type="text" name="username" id="username" className="input-text" placeholder="Your Username" required/>
					</div>
				</div>
				<div className="form-row-total">
					<div className="form-row">
						<input type="password" name="password" id="password" className="input-text" placeholder="Your Password" required/>
					</div>
					<div className="form-row">
						<input type="password" name="comfirm-password" id="comfirm-password" className="input-text" placeholder="Comfirm Password" required/>
					</div>
				</div>
				<div className="form-row-last">
					<input type="submit" name="register" className="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
</body>

 )
}
export default Register