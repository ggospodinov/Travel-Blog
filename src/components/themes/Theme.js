import { Link} from 'react-router-dom';

function Theme({

    themecard
}){

  const event =  Date(themecard.create_at).slice(4,25)
  console.log(event)

  // const event= new Date(Date((themecard.create_at))).toLocaleString('en-GB', { timeZone: 'Europe/Sofia' })
  //  const format = 
  //  const eventDate=event.toLocaleString('en-GB', { timeZone: 'Europe/Sofia' })
//  const format = 
  // const  formatter = new Intl.DateTimeFormat("en-GB", {
  //       year: "numeric",
  //       month: "long",
  //       day: "2-digit"
  //     });

 
return(
<div className="col-lg-8">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={themecard.imageUrl} alt=""/>
                      </div>
                      <div className="down-content">
                        <span>{themecard.themeName}</span>
                        <a href="post-details.html"><h4>{themecard.username}</h4></a>
                        <ul className="post-info">
                            {/* <li>{formatter.format(Date.parse(themecard.create_at))}</li>   */}
                             <li>{event}</li>  
                          <li>12 Comments</li>
                        </ul>
                        <p>{themecard.text}</p>
                        <div className="post-options">
                          <div className="row">
                            <li className="button">
                              <Link className="button" to={`details/${themecard.objectId}`}><h5>Details
                              </h5></Link>
                              </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
)
}
export default Theme