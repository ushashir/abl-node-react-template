import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row align-items-center">

    
          {/* menu links starts here */}
        <div className="col-md-12 mt-4">
          <ul className="list-inline footer-links">
          
          <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/">
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/about">
                About
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/">
                Blog
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-secondary" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* menu links starts here */}
        <div className="col-md-12">
          <ul className="list-inline social-buttons">
          <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.github.com/ushashir/">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.linkedin.com/in/ushashir/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.twitter.com/usha_shir">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//www.facebook.com/ushashir">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link target="_blank" rel="noopener" to="//stackoverflow.com/users/11306350/ushahemba-shir">
                <i className="fab fa-stack-overflow" aria-hidden={true}></i>
              </Link>
            </li>            
          </ul>
        </div>
          <br />
          <br />
          <br />
          
        <div className="col-md-12 list-inline-item btn btn-secondary align-items-center" >
        Powered by Nawill IT Solutions
        </div>
        
      </div>
    </div>
  </footer>
  )
}

export default Footer

