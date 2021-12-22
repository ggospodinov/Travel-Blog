import { useState, useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { useAuthContext} from '../../../contexts/AuthContext'
import usePostState from '../../../hooks/usePostState'; 
import * as servicesThemes from '../../../services/servicesThemes'; 
import Image from "../../../images/icons8-heart-16.png"
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import  * as likeService from '../../../services/likeService'

import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog'
import CommentPost from '../Comment/Comment';
import { Button } from 'react-bootstrap';


 function DetailPost()
 {

   const {user} = useAuthContext();
  
    const {objectId} = useParams();
    const { addNotification } = useNotificationContext();
    

     let [theme, setTheme] = usePostState(objectId)
     const deleteHistory= useHistory();
     const [showDeleteDialog, setShowDeleteDialog] = useState(false);

     console.log(theme.ownerId);
     console.log(user.ownerId)

     useEffect(() => {
      likeService.getThemeLikes(theme.ownerId)
          .then(likes => {
              setTheme(state => ({...state, likes}))
          })
  }, []);


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
  const likeButtonClick = (e) =>{
    e.preventDefault();
    if (user.ownerId === theme.ownerId) {
      return;
  }

  if (theme.likes.includes(user.ownerId)) {
      addNotification('You cannot like again')
      return;
  }
    
    likeService.like(user.ownerId, theme.ownerId)
    .then(()=>{

      setTheme(state => ({...state, likes: [...state.likes, user.ownerId]}))
      
      addNotification('Successfuly liked a themes :)', types.success);
    })

    

  }


     const userButtons =  <Button onClick={likeButtonClick} disabled={theme.likes?.includes(user.ownerId)}>Like</Button>;
     const ownerButtons =  <li><a href="!#" onClick={deleteClickHandler}>Delete</a></li>
     const commentPost =<CommentPost/>


   return(
    <>
    <ConfirmDialog  show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHeadler}/>

  <section class="blog-posts grid-system">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="all-blog-posts">
            <div class="row">
              <div class="col-lg-8">
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
                        <h6>Likes: {theme.likes?.length || 0}</h6></li>
                    </ul>
                    <p>{theme.postText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user['user-token']
      ?commentPost
      :null
      }
    </div>
  </section>
 </>
   
   )
 }
 export default DetailPost
 
