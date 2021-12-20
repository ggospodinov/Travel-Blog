import { useAuthContext} from '../../../contexts/AuthContext'



function CommentPostOne(
    {
        commentcard
    }
){

    const {user} = useAuthContext();
    const event =  Date(commentcard.created).slice(4,25)

    return(
        <>
    
        <div className="author-thumb">
        <img src="assets/images/comment-author-01.jpg" alt=""/>
      </div>
      <div className="right-content">
        <h4>{user.username}<span>{event}</span></h4>
        <h6>{commentcard.Usersubject}</h6>
        <h6>{commentcard.Usermessage}</h6>
      </div>
        </>
    )
}
export default CommentPostOne