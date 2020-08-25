
import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="container">
        <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p className="lead">
                    
                    Alexander Bernhardt Library is an initiative of <a href="http://www.alexander-bernhardt.com.ng/">
                    Alexander Bernhardt Grail Publishing Company</a>. The Library is committed to making available books   
                    emanating from the publishing company to general members of the public. In addition to this, the 
                    library environs are suitable for personal studies, and can be used to that effect upon <Link  to="/signup"> registration </Link>.  
                </p>
                <p className="lead"> 
                Our library hall with the capacity to accomodate up to 40 persons can be <Link  to="/booking"> rented </Link> for 
                for academic related events like seminar presentations, public lectures, toturial 
                 sessions, executives meetings etc.
                </p>
            </div>
        </div>
    </div>


    )
}

export default Info;