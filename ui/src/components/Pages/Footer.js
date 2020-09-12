import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
    <div className="container-fluid padding">
      <div className="row align-items-center">

          
        {/* menu links starts here */}
        
        <div className="col-md-12">
        <h4>Social Media Links</h4> 
          <ul className="list-inline social-buttons">
          
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.linkedin.com/in/ushashir/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//twitter.com/ab_library">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.facebook.com/alexbernlibrary">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>  
          </ul>
        </div>
                    <div className="col-md-4">
                    <h4>Contact Details</h4>
                        <hr className="light" />
                        <p> +234 813 857 2304</p>
                        <p>info@alexanderbernhardtlibrary.com</p>
                        <p>8, Morris Steet. Yaba. Lagos-Nigeria </p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h4>Opening / Closing Hours</h4>
                        <hr className="light" />
                        <p> Mon - Fri: 9am - 5pm</p>
                        <p>Saturday: 9am - 3pm</p>
                        <p>Sunday: Closed </p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h4>Site Links</h4>
                        <hr className="light" />
                        <small>
                        <p> <Link  to="/"> Home </Link> 
                            <Link  to="/services"> Services  </Link> 
                            <Link  to="/"> Blog  </Link>
                            <Link  to="/booking"> Book Hall  </Link>
                        </p>
                        
                        <p> <Link  to="/login"> Login  </Link> 
                            <Link  to="/register"> Register  </Link> 
                            <Link  to="/payment"> Subcribe  </Link>
                        </p>
                        <p> <Link  to="/getstarted"> Get Started  </Link> 
                            <Link  to="/register"> Register  </Link> 
                            <Link  to="/">Reviews</Link>
                        </p>
                        </small>
                    </div>
                    <div className="col-12">
                        <hr className="light" />
                        <h5> Alexander Bernhardt Library. &copy; 2020. Powered by <a href="http://nawipedia.com">Nawill </a></h5>
                    </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer

