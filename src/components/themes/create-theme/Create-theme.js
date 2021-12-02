import { useState } from 'react'
import styles from './Create-theme.module.css'

function CreateTheme(){

  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  const HendlePic =(e) =>{
      const pic = e.target.files[0];
      setFile(pic);
      console.log(pic)
  }
   const HendleAppUpload =() =>{
         const formData= new FormData();
       
         formData.append('file', file);
         formData.append('upload_preset', 'x3vaqe9r');
         fetch('https://api.cloudinary.com/v1_1/dkyjehujy/upload',{
           method: 'POST',
           body: JSON.stringify({formData} )    
         })
         .then((res) => res.json())
         .then(res=>console.log(res))
         .then((res)=> {
           setImages((images) =>[...images, res.secure_url])
         })
         .catch((err)=> console.log(err))

   }
   console.log(images)

  
 return(
<div id="fullscreen_bg" className={ styles.fullscreen_bg}>
<div className="container">
    <div className={styles.newthemeborder}>
      <div className={styles.headerbackground}>
        <span>New Theme</span>
      </div>
      <form     enctype="multipart/form-data">
        <div className={styles.newthemetitle}>
          <label for="themeName">Title <span className="red">*</span></label>
          <input type="text" name="themeName" id="themeName"/>
          
        </div>
        <div className={styles.newthemecontent}>
          <label for="postText">Post <span className="red">*</span></label>
          <textarea type="text" name="postText" id="postText" rows="8" className="height" ></textarea>
          
        </div>
        
        
        <div className={styles.newthemetitle}>
          <label for="image">Upload image<span className="red">*</span></label>
          <input type="file"  onChange={HendlePic} />
          <button onClick={HendleAppUpload}  >Upload</button>
          </div>
          <div>
            {images.map((image)=>(
              <img src={image} alt=''/>
            ))}
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