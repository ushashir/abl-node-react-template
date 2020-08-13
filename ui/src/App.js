import React, { Fragment } from 'react';
import '../src/css/App.css';
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import Alert from './components/Alerts'

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Work from "./components/Pages/Work";
import Contact from './components/Pages/Contact';
import Signup from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import Col from './components/Pages/Col';

function App() {
  return (
    <Router>
      <Fragment>
      <PageWrapper>
        <AuthState >
        <AlertState>
          <Alert />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route path="/col" component={Col} />
            <Route path="/login" component={Login} /> 
            <Route path="/signup" component={Signup} /> 
            <Footer />
          </Switch>
        </AlertState>
        </AuthState>
      </PageWrapper>
      
      </Fragment>
    </Router>
  );
}

export default App;
