import Theme from "./Theme"

function ResetTheme({
  themecard
}){
    
    return(
<div className="col-lg-4">
              <div className="sidebar">                              
                    <div className="sidebar-item recent-posts">
                      <div className="sidebar-heading">
                        <h2>Recent Posts</h2>
                      </div>
                      <div className="content">
                        <ul>
                          <li><a href="post-details.html">
                            <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                            {/* <span>{themecard.themeName}</span> */}
                          </a></li>
                          <li><a href="post-details.html">
                            <h5>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                            <span>May 28, 2020</span>
                          </a></li>
                          <li><a href="post-details.html">
                            <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                            <span>May 14, 2020</span>
                          </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>            
              </div> 
    )
}
export default ResetTheme