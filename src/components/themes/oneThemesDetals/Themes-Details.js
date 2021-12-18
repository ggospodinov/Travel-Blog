import { useParams ,useHistory } from 'react-router-dom';
import { useAuthContext} from '../../../contexts/AuthContext'
import usePostState from '../../../hooks/usePostState'; 
import * as servicesThemes from '../../../services/servicesThemes'; 
import Image from "../../../images/icons8-heart-16.png"
 function DetailPost()
 {

   const {user} = useAuthContext();
  
    const {objectId} = useParams();
    

     let [theme] = usePostState(objectId)
     const deleteHistory= useHistory();


    
     const event =  Date(theme.create_at).slice(4,25)
   
    const deleteHeadler =(e) =>{
           e.preventDefault();
           servicesThemes.destroy(objectId, user['user-token'])
           .then(() =>{
              deleteHistory.push('/themes')

           })
    }

     const userButtons =  <li><a href="!#">Like</a></li>
     const ownerButtons =  <li><a href="!#" onClick={deleteHeadler}>Delete</a></li>
   

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
                      {user.ownerId &&(user.ownerId === theme.ownerId
                        ? ownerButtons
                        :userButtons
                        )}
                          <img  src={Image} alt="" />
                        <li>
                        <h6>Likes: {theme.likes?.length}</h6></li>
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
 
