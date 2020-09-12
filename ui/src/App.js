import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css
import '../src/css/App.css';

// forms
import SignUp from './Components/Forms/SignUp';
import Login from './Components/Forms/Login';


// pages
import Home from "./Components/Pages/Home";
import GetStarted from "./Components/Pages/GetStarted";
import About from "./Components/Pages/Services";
import Contact from './Components/Pages/Contact';
import Booking from './Components/Pages/Booking';
import PaymentDashboard from './Components/ViewControllers/invoices/PaymentDashboard';
import Footer from "./Components/Pages/Footer";
// utils
import NotFound from './Components/Pages/NotFound';
import Alerts from './Components/Alerts';

import setAuthToken from './Utils/setAuthToken'

import PrivateRoute from './Components/PrivateRoute'
// context rest api's
import InvoiceState from './ContextAPIs/invoice/InvoiceState';
import AuthState from './ContextAPIs/auth/AuthState';
import AlertState from './ContextAPIs/alert/AlertState';

import PageWrapper from "./Components/PageWrapper";

if (localStorage.tokem) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
          <AuthState>
            <InvoiceState>
              <Router>
                <Fragment>
                <PageWrapper>
                  <AlertState>
                    <Alerts />
                    <Switch>
                      <Route exact={true} path="/" component={Home} />
                      <PrivateRoute exact={true} path='/payment' component={PaymentDashboard} />
                      <Route path="/getstarted" component={GetStarted} />
                      <Route path="/services" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/payment" component={PaymentDashboard} />
                      <Route path="/login" component={Login} />
                      <Route path="/register" component={SignUp} />
                      <Route path="/booking" component={Booking} />
                      <Route component={NotFound} />
                    </Switch>
                    </AlertState>
                </PageWrapper>
                <Footer />
                </Fragment>
              </Router>
            </InvoiceState>
          </AuthState>
      
  );
}

export default App;
