import { useState } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { useAuthContext} from '../../../contexts/AuthContext'
import usePostState from '../../../hooks/usePostState'; 
import * as servicesThemes from '../../../services/servicesThemes'; 
import Image from "../../../images/icons8-heart-16.png"

import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog'
import CommentPost from '../Comment/Comment';


 function DetailPost()
 {

   const {user} = useAuthContext();
  
    const {objectId} = useParams();
    

     let [theme, setTheme] = usePostState(objectId)
     const deleteHistory= useHistory();
     const [showDeleteDialog, setShowDeleteDialog] = useState(false);

     console.log(theme.ownerId);
     console.log(user.ownerId)


    const userEmailCreate=() => {
      if(user.ownerId ===theme.ownerId ){

        return user.email
      };
    }
    
     const event =  Date(theme.create_at).slice(4,25)
   
    const deleteHeadler =(e) =>{
           e.preventDefault();
           servicesThemes.destroy(objectId, user['user-token'])
           .then(() =>{
              deleteHistory.push('/themes')

           })
           .finally(() => {
            setShowDeleteDialog(false);
        });
    }

    const deleteClickHandler = (e) => {
      e.preventDefault();
      setShowDeleteDialog(true);
  }
  const likeButtonClick = () =>{
   
    if (user.ownerId === theme.objectId) {
      return;
  } 


  if (theme.likes.includes(user.ownerId)) {
    console.log('You cannot like again')
    return;
}
     servicesThemes.like(theme.objectId, user.ownerId)
     .then(() =>{
               setTheme(state=>({
                 ...state,
                 likes:[...state.likes ,user.ownerId]}))
  })

  }


     const userButtons =  <li><a href="!#" onClick={likeButtonClick}>Like</a></li>
     const ownerButtons =  <li><a href="!#" onClick={deleteClickHandler}>Delete</a></li>


   return(
    <>
    <ConfirmDialog  show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHeadler}/>

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
                      <li><a href="!#">{userEmailCreate()}</a></li>
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
  <CommentPost/>
    </div>
  </section>
 </>
   
   )
 }
 export default DetailPost
 
