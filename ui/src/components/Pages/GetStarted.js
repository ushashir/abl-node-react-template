import React from 'react';
import { Link } from 'react-router-dom';
import GetStartedInfo from './GetStartedInfo';

import '../../css/App.css';
import '../../css/Login.css';

const GetStarted = () => {
    return (
        <section className="page-section">
        <div className='container'>
        <div className="row ">
                <div className="col-md-4">
                        <Link to='/login'><img alt="news" src={require('../../Components/Assets/img/login.png')} /></Link>
                        <h4> <Link to='/login'>Login </Link> or <Link to='/register'>Register </Link> </h4> 
                </div>
                <div className="col-md-4">
                    <Link to='/booking'><img alt="news" src={require('../../Components/Assets/img/booking.jpg')} /></Link>
                    <h4> <Link to='/booking'>Book for event</Link> </h4>
                </div>
                <div className="col-md-4">
                    <Link to='/contact'><img alt="news" src={require('../../Components/Assets/img/message.jpg')} /></Link>
                        <h4> <Link to='/contact'>Send us a message</Link> </h4>
                </div>
            </div>
            <hr />
                <GetStartedInfo />
            </div>
        </section>
    )
}
export default GetStarted;