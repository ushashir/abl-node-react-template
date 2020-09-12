import React, { Component } from 'react'
// import image from "../assets/img/map-image.png";

class Services extends Component {
  render() {
    return (
      <section className='page-section'>
        <div className="container">  
          <div className="row">
            <div className="col-md-4">
            <h4 className="card-title">Academic Search Engines</h4>
            <ul>
              <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a> </li>
              <li> <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">Research Gate</a> </li>
              <li><a href="https://www.refseek.com/" target="_blank" rel="noopener noreferrer">Ref Seek</a> </li>
              <li> <a href="https://academic.microsoft.com/home" target="_blank" rel="noopener noreferrer">Microsoft Academic Research</a>  </li>
              <li> <a href="https://www.base-search.net/" target="_blank" rel="noopener noreferrer">Base</a> </li>
              <li> <a href="https://core.ac.uk/" target="_blank" rel="noopener noreferrer">Core</a>  </li>
            </ul>
              </div>
  
          <div className="col-md-4">
              <h4 className="card-title">Reference Sources</h4>
              <ul>
                <li><a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Wikipedia</a> </li>
                <li> <a href="https://www.investopedia.com/" target="_blank" rel="noopener noreferrer">Investopedia</a>  Finance  </li>
                <li> <a href="http://www.academicinfo.net/subject-guides" target="_blank" rel="noopener noreferrer">Online Subject Guide</a> </li>
              </ul>

          </div>
    
          <div className="col-md-4">
              <h4 className="card-title">Journals</h4>
              <ul>
                <li><a href="https://www.indexcopernicus.com/index.php/pl/" target="_blank" rel="noopener noreferrer">Index Copernicus</a> 
                - Multidisciplinary Journal </li>
                <li> <a href="https://www.ajol.info/index.php/ajol" target="_blank" rel="noopener noreferrer">African Journals Online</a> </li>
                <li><a href="doaj.org" target="_blank" rel="noopener noreferrer">Directory of Open Access Journals</a> </li>
                <li> <a href="https://www.dovepress.com/" target="_blank" rel="noopener noreferrer">Dove Medical Press</a>  
                - Medical Materials </li>
              </ul>

          </div>

            <div className="col-md-4">

              <h4 className="card-title"> Free Ebooks</h4>
                <ul>
                    <li><a href="https://www.pdfdrive.com/" target="_blank" rel="noopener noreferrer">PDF Drive</a> </li>
                    <li> <a href="https://www.obooko.com/" target="_blank" rel="noopener noreferrer">Obooko </a> </li>
                </ul>

              </div>
 
          <div className="col-md-4">

            <h4 className="card-title"> Bibliographic Tools</h4>
              <ul>
                  <li><a href="https://www.citationmachine.net/" target="_blank" rel="noopener noreferrer">Citation Machine</a> </li>
                  <li> <a href="https://www.bibme.org/" target="_blank" rel="noopener noreferrer">Bibme</a> </li>
              </ul>

          </div>
          </div>
      </div>  
      </section>
    )
  }
}

export default Services
