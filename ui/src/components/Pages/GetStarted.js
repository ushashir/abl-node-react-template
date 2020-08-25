
import React from 'react';
import { Link } from 'react-router-dom';
import GetStartedInfo from './GetStartedInfo';

const GetStarted = () => {
    return (
        <div className='container'>
        <div className="row ">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> <Link to='/login'>LOGIN </Link> </h4>
                                <br /> 
                                Don't have account? <Link to='/signup'> Signup here</Link>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-md-4">
                        <div className="card">
                        <div className="card-body">
                                <h4 className="card-title"> <Link to='/booking'>BOOK FOR EVENT</Link> </h4>
                                <br /> 
                                Our hall can accomodate up to 40 persons
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="card-body">
                                <h4 className="card-title"> <Link to='/contact'>SENT US A MESSAGE</Link> </h4>
                                <br /> 
                                You wish to inquire for anything? Send us a message
                            </div>
                            
                        </div>
                    </div>

                </div>
                <GetStartedInfo />
            </div>
    )
}

export default GetStarted;