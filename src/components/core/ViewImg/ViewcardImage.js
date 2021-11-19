const ViewImagCard= ({
    imagcard,
}) =>{
 return(
      
    <div className="item">
            <img src="/images/banner-item-01.jpg" alt=""/>
            <div className="item-content">
              <div className="main-content">
                <div className="meta-category">
                  <span>{imagcard.themeName}</span>
                </div>
                <a href="post-details.html"><h4>{imagcard.themeId?.postText}</h4></a>
                <ul className="post-info">
                  <li><a href="!#">{imagcard.userId.username}</a></li>
                  <li><a href="!#"> Date:<time>{imagcard.created_at}</time></a></li>
                  <li><a href="!#">12 Comments</a></li>
                </ul>
              </div>
            </div>
          </div>
        
        
        
      

 )
}
export default ViewImagCard