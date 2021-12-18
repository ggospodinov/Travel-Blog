// import { useState } from 'react'
import  * as servicesThemes from '../../../services/servicesThemes'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import styles from './Create-theme.module.css'


const CreateTheme =  () =>{
  const {user} = useAuthContext();

  

  const createHystory= useHistory();

  const onPostCreate =(e)=>{

    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let themeName = formData.get('themeName');
    let postText = formData.get('postText');
    let imageUrl = formData.get('imageUrl');
    let ownerId =user['ownerId']
    
    console.log(themeName);
    console.log(postText);
    console.log(imageUrl)


    servicesThemes.createPost({
          themeName,
          postText,
          imageUrl,
          ownerId
    },user['user-token'])
    .then(result=>{createHystory.push('/themes')

    })

  }

  // const [file, setFile] = useState(null);
  // const [images, setImages] = useState([]);

  // const HendlePic =(e) =>{
  //     const pic = e.target.files[0];
  //     setFile(pic);
  //     console.log(pic)
  // }
  //  const HendleAppUpload =() =>{
  //        const formData= new FormData();
       
  //        formData.append('file', file);
  //        formData.append('upload_preset', 'x3vaqe9r');
  //        fetch('https://api.cloudinary.com/v1_1/dkyjehujy/upload',{
  //          method: 'POST',
  //          body: JSON.stringify({formData} )    
  //        })
  //        .then((res) => res.json())
  //        .then(res=>console.log(res))
  //        .then((res)=> {
  //          setImages((images) =>[...images, res.secure_url])
  //        })
  //        .catch((err)=> console.log(err))

  //  }
  //  console.log(images)

  
 return(
<div id="fullscreen_bg" className={ styles.fullscreen_bg}>
<div className="container">
    <div className={styles.newthemeborder}>
      <div className={styles.headerbackground}>
        <span>New Theme</span>
      </div>
      <form     enctype="multipart/form-data" onSubmit={onPostCreate} method="POST">
        <div className={styles.newthemetitle}>
          <label for="themeName">Title <span className="red">*</span></label>
          <input type="text" name="themeName" id="themeName"/>
          
        </div>
        <div className={styles.newthemecontent}>
          <label for="postText">Post <span className="red">*</span></label>
          <textarea type="text" name="postText" id="postText" rows="8" className="height" ></textarea>
          
        </div>
        
        
        <div className={styles.newthemetitle}>
          <label for="image">Image<span className="red">*</span></label>
          <input type="text" name="imageUrl" id="imageUrl" placeholder="Image" />
          </div>
        <div className={styles.newthemebuttons}>
          <button  type="button"  className="cancel">Cancel</button>
          <button  className="public" >Post</button>
        </div>
      </form>
    </div>
  </div>
  </div>
 )
}
export default CreateTheme