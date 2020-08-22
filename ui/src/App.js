import React, { Fragment } from 'react';
import '../src/css/App.css';
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Work from "./components/Pages/Work";
import Contact from './components/Pages/Contact';
import PrivatePage from './components/Pages/PrivatePage';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import NotFound from './components/Pages/NotFound';

// context rest api's
import InvoiceState from './context/invoice/InvoiceState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alert from './components/Alerts'


function App() {
  return (
          <AuthState>
            <InvoiceState>
              <Router>
                <Fragment>
                <PageWrapper>
                  <AlertState>
                    <Alert />
                    <Switch>
                      <Route exact={true} path="/" component={Home} />
                      
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/work" component={Work} />
                      <Route path="/user" component={PrivatePage} />
                      <Route path="/login" component={Login} />
                      <Route path="/signup" component={SignUp} />
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
