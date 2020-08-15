import React from 'react';

import { BrowserRouter as Route} from "react-router-dom";

// states
import AuthState from '../../context/auth/AuthState'
import AlertState from '../../context/alert/AlertState'
import InvoiceState from '../../context/invoice/InvoiceState'

import Alerts from '../../components/Alerts'

// import utils
import setAuthToken from '../../utils/setAuthToken'

// Import Private Route
// import PrivateRoute from '../PrivateRoute'

//Pages
import Signup from '../Pages/SignUp';
import Login from '../Pages/Login';

if (localStorage.tokem) {
  setAuthToken(localStorage.token)
}

function UserDashbaoard () {
  
  return (
   
    <AuthState>
     <InvoiceState>
        <AlertState>
          <Alerts />
          <br /> <br />
            <Login />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
        </AlertState>
      
  </InvoiceState>
</AuthState>

  );
}

export default UserDashbaoard;
