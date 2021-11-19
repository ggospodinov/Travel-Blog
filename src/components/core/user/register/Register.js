import background from "./../../../../images/image3.jpg"

function Register(){
 return(
<body class="form-v9">
	<div class="page-content">
		<div class="form-v9-content" style={{backgroundImage: `url(${background}`}}>
			<form class="form-detail" action="#" method="post">
				<h2>Registration Form</h2>
				<div class="form-row-total">
					<div class="form-row">
						<input type="text" name="full-name" id="full-name" class="input-text" placeholder="Your Name" required/>
					</div>
					<div class="form-row">
						<input type="text" name="your-email" id="your-email" class="input-text" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
					</div>
				</div>
				<div class="form-row-total">
					<div class="form-row">
						<input type="password" name="password" id="password" class="input-text" placeholder="Your Password" required/>
					</div>
					<div class="form-row">
						<input type="password" name="comfirm-password" id="comfirm-password" class="input-text" placeholder="Comfirm Password" required/>
					</div>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register"/>
				</div>
			</form>
		</div>
	</div>
</body>

 )
}
export default Register