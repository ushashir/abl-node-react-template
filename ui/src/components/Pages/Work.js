import React, { Component } from 'react'

import PortfolioItem from "../Common/PortfolioItem";
// import Header from "../Common/Header";

import img1 from "../assets/img/portfolio/1-contact-keeper.jpg";
import img8 from "../assets/img/portfolio/8-book-keeper.jpg";
import img2 from "../assets/img/portfolio/2-github-finder.jpg";
import img3 from "../assets/img/portfolio/3-abl.jfif";
import img4 from "../assets/img/portfolio/4-usha.jpg";
import img5 from "../assets/img/portfolio/5-afrogronics.jpg";
import img6 from "../assets/img/portfolio/6-orji-sunday.jfif";
import img7 from "../assets/img/portfolio/7-mech.jfif";

const portfolio = [
  {
  title: 'Contact Keeper App', 
  subtitle: 'A full stack App build with Node.js, React.js, Express and Mongo DB ', 
  image: img1, 
  link: '//contact-keep.herokuapp.com/login', 
  github: '//github.com/ushashir/contact-keeper'
},
{
  title: 'Book Keeper App', 
  subtitle: 'A full stack App build with Node.js, React.js, Express and Mongo DB ', 
  image: img8, 
  link: '//secure-spire-41417.herokuapp.com/', 
  github: '//github.com/ushashir/book-keeper'
},
  {
  title: 'Github Finder', 
  subtitle: 'Github Finder app build with vanilla JavaScript', 
  image: img2, 
  link: '//5e2f1b268ac2c872204efa02--githubfindenawill.netlify.app/', 
  github: '//github.com/ushashir/react_github_finder'
},
  {
    title: 'Library Website', 
    subtitle: 'Built with HTML5, CSS3, Boostrap4 and JavaScript.', 
    image: img3, 
    link: '//www.alexanderbernhardtlibrary.com/', 
    github: '//github.com/ushashir/abl.com'
  },
  {
    title: 'My PortFolio Site', 
    subtitle: 'My portfolio site, designed with Twitter Boostrap built with React', 
    image: img4, 
    link: ' ', 
    github: '//github.com/ushashir/ushahembashir.com'
  },
  {
    title: 'E-Commerce Site', 
    subtitle: 'Online Store designed with Twitter Bootstrap and build with HTML5 and JavaScript', 
    image: img5, 
    link: '//ushashir.github.io/Afrogronics/', 
    github: ''
  },
  {
    title: 'Client Portfolio', 
    subtitle: 'Designed with Bootstrap4 and built with HTML5 and JavaScript', 
    image: img6,
    link: '//ushashir.github.io/nawill_orji/', 
    github: '//github.com/ushashir/nawill_orji' 
  },
  {
    title: 'Mechanic Store', 
    subtitle: 'Designed with Bootstrap4 and built with HTML5 and JavaScript', 
    image: img7, 
    link: '//ushashir.github.io/Mechanic-site/', 
    github: '//github.com/ushashir/Mechanic-site'
  }
  
]
class Portfolio extends Component {
  render() {
    return (
      <>
        
      <div>
        
      </div>
      <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          {portfolio.map((item, index) => {
            return <PortfolioItem {...item} key={index} />
          })}
        </div>
      </div>
    </section>  
    </>
    )
  }
}

export default Portfolio

