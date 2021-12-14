import { Link} from 'react-router-dom';

function ResetCard(
    {
        resetcard
        
    
    }
){
    return(

        <li>
             <Link to={`/details/${resetcard.objectId}`}>
        <h5>{resetcard.postText}</h5>
        <span>{resetcard.themeName}</span> 
      </Link> 
      </li>
    )
}
export default ResetCard