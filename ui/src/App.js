import React from 'react';
import '../src/css/App.css';
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AlertState from './context/alert/AlertState'
import Alert from './components/Alerts'

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Work from "./components/Pages/Work";
import Contact from './components/Pages/Contact';
// import Signup from './components/auth/Signup';
import Login from './components/Pages/Login';

function App() {
  return (
    <Router>
      <PageWrapper>
        <AlertState>
          <Alert>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route path="/login" component={Login} /> 
            </Switch>
          </Alert>
        </AlertState>
      </PageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
