//  import React from "react";
//  const  Pagenation = (
//      {
//         postsPerPage,
//         totalPosts ,
//         paginate
//      }) =>{

//      const pageNumbers=[];

//      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//          pageNumbers.push(i);
         
//      }
//      const handlePrev =()=>{
//         if(number === 1) return
//         setPageNumber(number - 1)
//      }

//          return(

//     <div className="col-lg-12">
//                     <ul className="pagination">
//                         {pageNumbers.map(number=>(
//                             <li key={number} className="page-item">
//                                 <button onClick={handlePrev} >prev</button>
//                                 <button onClick={handleNext}>next</button>
//                              <a onClick={()=> paginate(number)} href="!#" className="page-link">
//                                  {number}
//                              </a>
//                             </li>
//                         ))}
//                     </ul>   
//                   </div>
                      
//                     //   {/* <li><a href="!#"><i className="fa fa-angle-double-right"></i></a></li> */}
//          )
//      }
//      export default Pagenation