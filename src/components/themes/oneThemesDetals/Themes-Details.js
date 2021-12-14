import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext, } from 'react'
import usePostState from '../../../hooks/usePostState'; 
 function DetailPost()
 {

   const {user} = useContext(AuthContext);
  
    const {objectId} = useParams();
    

     let [theme, setTheme] = usePostState(objectId)
     const event =  Date(theme.create_at).slice(4,25)
    

   

   return(
    
  <section class="blog-posts grid-system">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="all-blog-posts">
            <div class="row">
              <div class="col-lg-12">
              <div class="blog-post">
                  <div class="blog-thumb">
                    <img src={theme.imageUrl} alt=""/>
                  </div>
                  <div class="down-content">
                    <span>Lifestyle Post</span>
                    <a href="post-details.html"><h4>{theme.themeName}</h4></a>
                    <ul class="post-info">
                      <li><a href="!#">{user.email}</a></li>
                      <li><a href="!#">{event}</a></li>
                      <li><a href="!#">10 Comments</a></li>
                    </ul>
                    <p>{theme.postText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
   )
 }
 export default DetailPost
 
