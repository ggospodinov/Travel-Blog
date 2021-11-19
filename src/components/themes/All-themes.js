import Theme from './Theme'
import {useEffect, useState} from 'react'
import * as themesService from '../../services/servicesThmes';
import styles from './All-themes.module.css';
// import Pagenation from '../../pagenations';


function AllThemes(){

  const[posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber]= useState(1);
    const [postNumber]= useState(4);
    const currentPageNumber = (pageNumber * postNumber) - postNumber;
    const paginatedPosts = posts.splice(currentPageNumber, postNumber);

    const handlePrev =()=>{
      if(pageNumber === 1) return
      setPageNumber(pageNumber - 1)
    }
    
    const handleNext =()=>{
      setPageNumber(pageNumber + 1)
    }
    // const[currentPage, setCurrentPage] = useState(1);
  // const[postsPerPage] = useState(5);
    

  useEffect(() =>  {
    themesService.getAllThemes()   
     .then(result =>{
         setPosts(result)
                })

        //  themesService.getAllThemes();        
  },  []);

  
  
  //  const indexOfLastPost =currentPage * postsPerPage;
  //  const indexOfFirstPost =indexOfLastPost - postsPerPage;
  //  const currentPosts =posts.slice(indexOfFirstPost, indexOfLastPost);
  
  //  const paginate = (pageNamber) => setCurrentPage(pageNamber)
  
  
  // const Posts =({posts})=>{
  //   return(
  //     <div className="row">
  //   {posts.map(x => <Theme key={x._id}   themecard={x}/>)}
  //   </div>
  //  )
  // }

   console.log(paginatedPosts)
 

    return( 
      <section className="blog-posts grid-system">
         <div className="container"> 
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
              
                 { paginatedPosts.map((x)=>(<Theme key={x._id}   themecard={x}/> ))}
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
             <div className="col-lg-4">
              <div className="sidebar">                              
                    <div className="sidebar-item recent-posts">
                      <div className="sidebar-heading">
                        <h2>Recent Posts</h2>
                      </div>
                      <div className="content">
                        <ul>
                          <li><a href="post-details.html">
                            <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                            <span>May 31, 2020</span>
                          </a></li>
                          <li><a href="post-details.html">
                            <h5>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                            <span>May 28, 2020</span>
                          </a></li>
                          <li><a href="post-details.html">
                            <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                            <span>May 14, 2020</span>
                          </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>            
              </div> 
            </div> 
          </div> 
        
      </section>
    )
}
export default AllThemes