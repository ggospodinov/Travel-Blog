import styles from './Create-theme.module.css'

function CreateTheme(){
 return(
<div id="fullscreen_bg" className={ styles.fullscreen_bg}>
<div className="container">
    <div className={styles.newthemeborder}>
      <div className={styles.headerbackground}>
        <span>New Theme</span>
      </div>
      <form   method="POST"  enctype="multipart/form-data">
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
          <input type="file" name="image" id="image" className={styles.formcontrolfile}/>
          </div>
        <div className={styles.newthemebuttons}>
          <button  type="button"  routerLink="/themes" className="cancel">Cancel</button>
          <button className="public" >Post</button>
        </div>
      </form>
    </div>
  </div>
  </div>
 )
}
export default CreateTheme