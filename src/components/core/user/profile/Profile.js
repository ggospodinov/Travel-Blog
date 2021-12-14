import {useContext} from "react";
 import styles from './Profile.module.css'
 import { AuthContext } from "../../../../contexts/AuthContext"
 import { FcPhone, FcBusinessman, FcAddressBook } from "react-icons/fc";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Profile(){
    const { user} = useContext(AuthContext);
    console.log(user)

    
 return(
<div className="container d-flex justify-content-center align-items-center">
    <div className={styles.card}>
        <div className="upper d-flex flex-column text-white"> 
        <img src="https://i.imgur.com/Mn9kglf.jpg" width="200" clasName="rounded" alt=''/>
            <h3 className="mb-0 mt-2 font-weight-bold">Martina Hengis</h3> 
            
        </div>
        <div className={styles.down}>
            <div className={styles.accounts}>
                {/* <div className="d-flex flex-row align-items-center"> */}
                    {/* <div className={styles.box}> <span className={styles.dots}></span> </div> */}
                    <div className="d-flex flex-column ml-8">
                        <h4 className="mb-0 font-weight-bold"><FcBusinessman/>{user?.username}</h4>
                        <h4 className="mb-0 font-weight-bold"><FcAddressBook/>{user?.email}</h4> 
                        {/* <h4 className="mb-0 font-weight-bold"><FcPhone/>phone</h4> */}
                    </div>
                {/* </div> */}
                <div className={styles.subscribe}> <span className="d-block">You have subscribed to our premium account since <b>July 8,2020</b></span>  </div>
            </div>
        </div>
    </div>
</div>
    )
    }
    export default Profile
	