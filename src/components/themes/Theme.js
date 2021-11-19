function Theme({
    themecard
}){

  const  formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });

 
return(
<div className="col-lg-8">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src="/images/blog-thumb-01.jpg" alt=""/>
                      </div>
                      <div className="down-content">
                        <span>{themecard.themeName}</span>
                        <a href="post-details.html"><h4>{themecard.userId.username}</h4></a>
                        <ul className="post-info">
                           <li>{formatter.format(Date.parse(themecard.created_at))}</li>
                          <li>12 Comments</li>
                        </ul>
                        <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                        <div className="post-options">
                          <div className="row">
                            {/* <div className="col-lg-12"> */}
                              {/* <ul className="post-tags"> */}
                                {/* <li><i className="fa fa-tags"></i></li> */}
                                {/* <li><a href="!#">Best Templates</a>,</li>
                                <li><a href="!#">TemplateMo</a></li> */}
                              {/* </ul> */}
                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
)
}
export default Theme