import Theme from '../Theme'
import ResetTheme from '../resetPost/ResetTheme';
import {useEffect, useState} from 'react'
import * as themesService from '../../../services/servicesThemes';
import styles from './All-themes.module.css';

// import Pagenation from '../../pagenations';


function AllThemes(){

  const[posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber]= useState(1);
    const [postNumber]= useState(5);
    const currentPageNumber = (pageNumber * postNumber) - postNumber;
    const paginatedPosts = posts.splice(currentPageNumber, postNumber);

    const handlePrev =()=>{
      if(pageNumber === 1) return
      setPageNumber(pageNumber - 1)
    }
    
    const handleNext =()=>{
      setPageNumber(pageNumber + 1)
    }
  
  useEffect(() =>  {
    themesService.getAllThemes()   
     .then(result =>{
         setPosts(result)
                })
      .catch(err=>{
         console.log(err)
                });

           
  },  [])

    return( 
      <section className="blog-posts grid-system">
         <div className="container"> 
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
              
                 { paginatedPosts.map((x)=>(<Theme key={x.objectId}   themecard={x}/> ))}
                 {/* <Posts posts={paginatedPosts}/> */}
                  {/* {allThemes.map(x => <Theme key={x._id}   themecard={x}/>)} */}
                  {/* <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
                 {/* <div>Page {pageNumber} </div> */}
                 <div>
                 <button className={styles.previous} onClick={handlePrev}>&laquo; Previous</button>
                 <button  className= {styles.next} onClick={handleNext}>Next &raquo;</button>
                </div>         
              
            </div>
              
            </div>
            <ResetTheme/>
             
            </div> 
          </div> 
        
      </section>
    )
}
export default AllThemes