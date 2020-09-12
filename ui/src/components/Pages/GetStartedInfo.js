
import React from 'react';
// import { Link } from 'react-router-dom';

const GetStartedInfo = () => {
    return (
      <div className='row'>
        <div className='col-md-6'>
        <h1 className="display-4"> Service Charges </h1>
            <hr />
                <p> We offer condusive study enviroment with matured ambiance. 
                This service is only accesible to registered members of the public. </p>
                    
                <p className="lead">Registration cost N1000. Valid for 12 months</p>
                <p> Regular subscription charges upon registration are as follows;</p>
        </div>
        <div className='col-md-6'>
        <table className="table">
            <thead>
              <tr className='table-dark'>
                <th scope="col">DURATION</th>
                <th scope="col">STUDENTS</th>
                <th scope="col">OTHERS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily</td>
                <td>N200</td>
                <td>N500</td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>N500</td>
                <td>N1000</td>
              </tr>
              <tr>
                <td>3 Months</td>
                <td>N3500</td>
                <td>N7000</td>
              </tr>
            </tbody>
          </table>
         <p> <strong>Note:</strong> Students as reffered here only apply to undergraduate and O level.</p>
        </div>
      </div>
    )
}

export default GetStartedInfo;