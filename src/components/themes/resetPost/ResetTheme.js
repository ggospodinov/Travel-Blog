// import Theme from "./Theme"
import {useState, useEffect} from 'react'
import * as themesService from '../../../services/servicesThemes';
import ResetPostCard from './ResetPostCard'

function ResetTheme(){

  const[posts, setPosts] = useState([]);

  useEffect(() => {
   themesService.getAllThemes()
        .then(result => {
            setPosts(result);
        })
}, []);

    
    return(
<div className="col-lg-4">
              <div className="sidebar">                              
                    <div className="sidebar-item recent-posts">
                      <div className="sidebar-heading">
                        <h2>Recent Posts</h2>
                      </div>
                      <div className="content">
                        <ul>

                          {posts.map((x)=>(<ResetPostCard key={x._id}   resetcard={x}/> ))}

                          
                           
                          {/* <li><a href="post-details.html">
                            <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                            <span>May 14, 2020</span>
                          </a></li>  */}
                        </ul>
                      </div>
                    </div>
                  </div>            
              </div> 
    )
}
export default ResetTheme