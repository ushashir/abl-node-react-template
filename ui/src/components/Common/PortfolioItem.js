import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PortfolioItem extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <Link className="portfolio-link" data-toggle="modal" target="_blank" rel="noopener" to={this.props.link}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={this.props.image} alt={this.props.title} />
        </Link>
        <div className="portfolio-caption">
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
          <div className="d-flex flex-row justify-content-between my-flex-container">
          <Link target="_blank" rel="noopener" to={this.props.link} className="btn btn-success my-flex-item">Demo</Link>
          <Link target="_blank" rel="noopener" to={this.props.github} className="btn btn-danger my-flex-item">Code</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem
