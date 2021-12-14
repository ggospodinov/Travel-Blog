import AllThemes from './themes/all-Themes/All-themes'
// import ViewImg from './core/ViewImg/ViewImg'
import { Link } from 'react-router-dom'
function Home(){
return(
    <>
{/* <ViewImg/> */}
<section className="blog-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <AllThemes/>
            <div className="col-lg-6">
                  <div className="main-button">
                    <Link to="/themes">View All Posts</Link>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
    </>
)
            }          
    export default Home