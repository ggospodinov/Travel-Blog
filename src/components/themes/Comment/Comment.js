import {useEffect, useState} from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useHistory,useParams } from 'react-router-dom'

import  * as servicesThemes from '../../../services/servicesThemes'
import CommentPostOne from './CommendCard'
import usePostState from '../../../hooks/usePostState'; 

function CommentPost(){

    const {user} = useAuthContext();
    const createHystory= useHistory();
    const{objectId} =useParams();
   
  

   
   
    let userlog= (user['user-token'])
    let [theme, setTheme] = usePostState(objectId)
    const[comments,setComments]= useState([]);
    
    console.log(user.ownerId)
    console.log(theme.objectId)


    useEffect(() =>  {
       if(theme.objectId){
         return;
       }

      
        servicesThemes.getComment(objectId)   
         .then(result =>{
             setComments(result)
                    })
          .catch(err=>{
             console.log(err)
                    });
    
                
      },[objectId])
console.log(comments)
    

  const  onCommentCreate=(e)=>{
   

    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let userName = formData.get('Username');
    let useremail = formData.get('Useremail');
    let usersubject = formData.get('Usersubject');
    let usermessage = formData.get('Usermessage')
    let ownerId =user['ownerId']
    let objectId =theme['objectId']
    
    console.log(userName);
    console.log(useremail);
    console.log(usersubject);
    console.log(usermessage);
    
    servicesThemes.createComment({

         userName,
         useremail,
         usersubject,
         usermessage,
         ownerId,
         objectId
  })
  .then(result=>{createHystory.push(`/themes`)

},user['user-token'])
formData.values = "";
  
}



// const commentMap = comments.map((x)=>(<CommentPostOne key={x.ownerId}   commentcard={x}/> ))


  
    return(
<>
        <div className="col-lg-12">
        <div className="sidebar-item comments">
          <div className="sidebar-heading">
            <h2>Comments</h2>
          </div>
          <div className="content">
            <ul>
              <li>
              {comments.map((x)=>(<CommentPostOne key={x.ownerId}   commentcard={x}/> ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

<div class="col-lg-12">
                  <div className="sidebar-item submit-comment">
                    <div className="sidebar-heading">
                      <h2>Your comment</h2>
                    </div>
                    <div className="content">
                      <form   onSubmit={onCommentCreate} disabled={comments.includes(user.ownerId)} method="POST">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="Username" type="text" id="name" placeholder="Your name"  />
                            </fieldset>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="Useremail" type="text" id="email" placeholder="Your email" />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-sm-12">
                            <fieldset>
                              <input name="Usersubject" type="text" id="subject" placeholder="Subject" />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea name="Usermessage" rows="6" id="message" placeholder="Type your comment" ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-button">Submit</button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                </>

    )
    }
    export default CommentPost

