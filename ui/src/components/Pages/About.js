import React, { Component } from 'react'
import Header from "../Common/Header";
// import image from "../assets/img/map-image.png";

import Team from "../Common/Team";
import Portfolio from './Work';

class About extends Component {
  render() {
    return (
      <div>
        <Header

          title="Software Developer [ MERN Stack ] "
          subtitle="USHAHEMBA SHIR"
          showButton={false}
          // image={image}
        />

        <Team />

        <div className="container ">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div>

              </div>
            <h1 >PORTFOLIO</h1>
            </div>

          </div>
            
        </div>
        
        <Portfolio />

        <section className="page-section" id="about">
          <div className="container">

          <div className="row">
          <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading text-uppercase">EDUCATION</h2>
            <p className="large text-muted"> Bachelor of Library and Information Science / combined Economics. University of
            of Nigeria, Nsukka. 2016 </p>

            <p className="large text-muted"> Diploma Certificate in Desktop Applications and Internet Operations. 
            BocoTech Computer Training Institute. Makurdi. 2011 </p>

            <p className="large text-muted"> West African Senior School Certificate Examination. Government College Makurdi. 2010</p>

            <p className="large text-muted"> First School Living Certificate. LGEA Primary School Akpa, Mbakor. Tarka
            Local Government of Benue State. 2004 </p>
          </div>
        </div>

          </div>
        </section>
      </div>
    )
  }
}

export default About
